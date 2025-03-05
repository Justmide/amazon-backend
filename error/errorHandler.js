

const handleValidationError = ()=>{


}
const handleCastError = ()=>{

}
const handleDuplicateError = (err)=>{
    const errorKey = Object.keys(err.keyValue)[0]
    const errorValue = Object.values(err.keyValue)[0]
    const error = new Error(`${errorKey} of ${errorValue} already exists!`)
    error.statusCode = 403
    return error

}


const errorHandler = (err, req, res, next) =>{
    // DUPLICATE ERROR
    if(err.code === 11000){
        const error = handleDuplicateError(err)
        res.status(error.statusCode).json({
            message: error.message
        })
    }else if(err.name === "CastError"){
        const error = handleCastError(err)
    }else if(err.name === "ValidationError"){
        const error = handleCastError(err)
    }
}

module.exports = errorHandler
