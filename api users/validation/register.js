const Validator = require("validator")
const isEmpty = require("is-empty")


module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    
    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Ingrese su nombre de usuario";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Debe ingresar un email";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email inválido";
    
    }// Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Ingrese una contraseña";
    } 
    
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Debe confirmar la contraseña";
    } 
    
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "La contraseña debe tener almenos 6 carácteres";
    } 
    
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Las contraseñas no coinciden";
    } 
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
