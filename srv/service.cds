using {JobApplicationExt} from './external/JobApplicationExt';

service MyService @(path: '/proxy'){
 entity JobApplication as projection on JobApplicationExt.JobApplication {
    applicationId,
    candidateId,
    jobReqId,
    firstName,
    lastName,
    jobTitle,
    jobAppStatus: redirected to JobApplicationStatus,
    jobRequisition: redirected to JobRequisition,
    statusId: redirected to PicklistOption,
    custom_parentePublico1, 
    custom_parentePublico2, 
    custom_parentePublico3,
    custom_tituloPublico1, 
    custom_tituloPublico2, 
    custom_tituloPublico3,
    custom_grauPublico1, 
    custom_grauPublico2, 
    custom_grauPublico3,
    custom_localPublico1, 
    custom_localPublico2, 
    custom_localPublico3,

 };

 entity JobApplicationStatus as projection on JobApplicationExt.JobApplicationStatus;

 entity JobRequisition as projection on JobApplicationExt.JobRequisition {
   recruiter: redirected to JobRequisitionOperator
 } 

 entity PicklistOption as projection on JobApplicationExt.PicklistOption;

 entity JobRequisitionOperator as projection on JobApplicationExt.JobRequisitionOperator {firstName, lastName};
}