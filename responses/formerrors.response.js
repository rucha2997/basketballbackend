const fornErrorsResponse = (validationErrors)=>{
    const formErrors ={
        meta:{
            type:"form_errors",
        },
        errors:{},
    };

    for(let validationError of validationErrors.inner){
        if(formErrors.errors[validationError.path]){
            formErrors.errors[validationError.path].push(validationError.message);
            continue;
        }
        formErrors.errors[validationError.path] = [validationError.message];
    }

    return formErrors;
};

module.exports = fornErrorsResponse;