using {JobApplicationExt} from './external/JobApplicationExt';

service MyService @(path: '/proxy'){
 entity JobApplication as projection on JobApplicationExt.JobApplication {
    *,
    jobAppStatus: redirected to JobApplicationStatus
 };

 entity JobApplicationStatus as projection on JobApplicationExt.JobApplicationStatus
}