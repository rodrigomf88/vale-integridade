const cds = require('@sap/cds')

module.exports = async (srv) => {
    const sufa = await cds.connect.to('SUCCESS_FACTORS_JOB_APPLICATION')

    srv.on('READ', 'A_JobApplication', async (req)=> {
        const jobApplication = await sufa.run(req.query)

        return jobApplication
    })
}