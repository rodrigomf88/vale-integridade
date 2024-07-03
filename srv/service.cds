using {SUCCESS_FACTORS_JOB_APPLICATION} from './external/SUCCESS_FACTORS_JOB_APPLICATION';

service MyService @(path: '/proxy'){
 entity A_JobApplication as projection on SUCCESS_FACTORS_JOB_APPLICATION.JobApplication;
}