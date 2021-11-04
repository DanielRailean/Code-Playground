function getNewError(statusCode,message){
    let error = {
        timestamp: Date(),
        statusCode : statusCode,
        message: message
    }
    return error;
}

const errorHandler = {
    getNewError,
}

export default errorHandler;