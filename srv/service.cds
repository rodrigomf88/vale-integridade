using {SFSF_EXTENSIBILITY_DEV} from './external/SFSF_EXTENSIBILITY_DEV';
 
service MyService @(path: '/proxy'){
 entity Miranha as projection on SFSF_EXTENSIBILITY_DEV.JobApplication;
}