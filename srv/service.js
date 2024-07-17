const cds = require('@sap/cds')
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client')

module.exports = async (srv) => {
    const JobApplicationExt = await cds.connect.to('JobApplicationExt')
    srv.on('READ', 'JobApplication', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobApplicationStatus', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobRequisition', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'PicklistOption', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobRequisition', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'IntegrityOptions', async (req) => await JobApplicationExt.run(req.query))

    srv.on('UPDATE', 'JobApplication', async (req) => {
        const { applicationId, customIntegridadeComments, customIntegridadeData } = req.data;

        if (!customIntegridadeComments) {
            return req.error(400, 'Field "customIntegridadeComments" is required.');
        }

        if (!customIntegridadeData) {
            return req.error(400, 'Field "customIntegridadeData" is required.');
        }

        const dateToTimesTamp = new Date(customIntegridadeData).getTime();

        const upsertData = {
            "__metadata": {
                "uri": "JobApplication",
                "type": "SFOData.JobApplication"
            },
            applicationId,
            customIntegridadeComments,
            customIntegridadeData: `/Date(${dateToTimesTamp}+0000)/`
        };

        try {
            const response = await executeHttpRequest({
                destinationName: 'SFSF_EXTENSIBILITY_DEV'
            }, {
                method: 'POST',
                url: '/odata/v2/upsert',
                data: upsertData
            });

            const draftExists = await cds.run(SELECT.one.from('my.jobapplication.Drafts').where({ jobApplicationId: applicationId }));

            if (draftExists) {
                await cds.run(DELETE.from('my.jobapplication.Drafts').where({ jobApplicationId: applicationId }));
                console.log(`Draft for applicationId ${applicationId} has been deleted.`);
            }

            return response.data;
        } catch (error) {
            console.error(error);
            req.error({
                code: error.code || 'INTERNAL_SERVER_ERROR',
                message: error.message,
                target: req.target
            });
        }
    })
}