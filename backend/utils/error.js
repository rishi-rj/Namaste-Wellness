export const errorHandler=(statusCode,message)=>{
    const error = new Error();          //Error js constructor
    error.statusCode = statusCode;
    error.message= message;
    return error;
}


// above is custom error