using {cuid } from '@sap/cds/common';

namespace my.jobapplication;

entity Drafts : cuid {
    jobApplicationId: Integer64 not null;
    avaliadorIntegridade: LargeString;
    resultadoIntegridade: String;
    comentarioIntegridade: LargeString;
    isPublicAgent: Boolean;
    wasPublicAgent: Boolean;
    parentePublico1: LargeString;
    parentePublico2: LargeString; 
    parentePublico3: LargeString;
    tituloPublico1: LargeString; 
    tituloPublico2: LargeString; 
    tituloPublico3: LargeString;
    grauPublico1: LargeString; 
    grauPublico2: LargeString; 
    grauPublico3: LargeString;
    localPublico1: LargeString; 
    localPublico2: LargeString; 
    localPublico3: LargeString;
}