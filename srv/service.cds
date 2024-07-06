using {JobApplicationExt} from './external/JobApplicationExt';

service MyService @(path: '/proxy'){
 entity JobApplication as projection on JobApplicationExt.JobApplication {
    jobReqId,
    firstName,
    lastName,
    jobTitle,
    jobAppStatus: redirected to JobApplicationStatus,
    jobRequisition: redirected to JobRequisition,
    statusId: redirected to PicklistOption
 };

 entity JobApplicationStatus as projection on JobApplicationExt.JobApplicationStatus;

 entity JobRequisition as projection on JobApplicationExt.JobRequisition {
   recruiter: redirected to JobRequisitionOperator
 } 

 entity PicklistOption as projection on JobApplicationExt.PicklistOption;

 entity JobRequisitionOperator as projection on JobApplicationExt.JobRequisitionOperator {firstName, lastName};
}