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
        const { applicationId, ...data } = req.data;

        const upsertData = {
            "__metadata": {
                "uri": "JobApplication",
                "type": "SFOData.JobApplication"
            },
            applicationId,
            ...data
        };

        try {
            const response = await executeHttpRequest({
                destinationName: 'SFSF_EXTENSIBILITY_DEV'
            }, {
                method: 'POST',
                url: '/odata/v2/upsert',
                data: upsertData
            });

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