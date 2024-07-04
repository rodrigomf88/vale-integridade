using {SFSF_EXTENSIBILITY_DEV} from './external/SFSF_EXTENSIBILITY_DEV';

service MyService @(path: '/proxy'){
 entity JobApplication as projection on SFSF_EXTENSIBILITY_DEV.JobApplication {
    *,
    jobAppStatus: redirected to JobApplicationStatus
 };

 entity JobApplicationStatus as projection on SFSF_EXTENSIBILITY_DEV.JobApplicationStatus
}