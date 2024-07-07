const cds = require('@sap/cds')

module.exports = async (srv) => {
    const JobApplicationExt = await cds.connect.to('JobApplicationExt')


    srv.on('READ', 'JobApplication', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobApplicationStatus', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobRequisition', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'PicklistOption', async (req) => await JobApplicationExt.run(req.query))
    srv.on('READ', 'JobRequisition', async (req) => await JobApplicationExt.run(req.query))
}