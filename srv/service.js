const cds = require('@sap/cds')

module.exports = async (srv) => {
    const successFactorsJobApplication = await cds.connect.to('SUCCESS_FACTORS_JOB_APPLICATION')

    srv.on('READ', 'A_JobApplication', async (req)=> {
        const jobApplication = await successFactorsJobApplication.run(req.query)

        return jobApplication
    })
}