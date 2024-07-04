const cds = require('@sap/cds')

module.exports = async (srv) => {
    const successFactorsJobApplication = await cds.connect.to('JobApplicationExt')

    srv.on('READ', 'JobApplication', async (req)=> {
        const jobApplication = await successFactorsJobApplication.transaction(req).send({
            query: req.query,
        });

        return jobApplication
    })

    srv.on('READ', 'JobApplicationStatus', async (req)=> {
        const jobApplicationStatus = await successFactorsJobApplication.run(req.query)

        return jobApplicationStatus
    })
}