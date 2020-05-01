const joi = require('@hapi/joi')

// login validated
const LoginValidated = (body) =>{

    // string pattern check validat

    const schema = joi.object({
        email: joi.string().email().min(3).required(),
        password: joi.string().min(6).required()
    })

    return schema.validate(body)
}


// register validat 
const RegisterValidate = (body) =>{
    const schema = joi.object({
        email: joi.string().email().min(3).required(),
        password: joi.string().min(6).required(),
        name:joi.string().min(3).required(),
        lastName:joi.string().min(6).required(),
    })

    return schema.validate(body)
}


module.exports.LoginValidated = LoginValidated
module.exports.RegisterValidate = RegisterValidate