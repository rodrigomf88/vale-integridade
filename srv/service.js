const cds = require('@sap/cds')

module.exports = async (srv) => {
    const sufa = await cds.connect.to('SFSF_EXTENSIBILITY_DEV')

    srv.on('READ', 'A_JobApplication', async (req)=> {
        const jobApplication = await sufa.run(req.query)

        return jobApplication
    })
}