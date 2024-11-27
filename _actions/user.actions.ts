"use server"

type ErrorType = {
    [key: string]: string | number;
}

export const validateInput = async (label: string, inputValue: string,  errors: ErrorType) => {
    let minChar, maxChar, labelStr 
    const regex = /^[a-zA-Z0-9]*$/
    let actualValue = inputValue.trim()
    
    if(label === "username") {
        minChar = 3
        maxChar = 15
        labelStr = "nombre"
    }
    if(label === "userpassword") {
        minChar = 4
        maxChar = 10
        labelStr = "contraseña"
    }
    if(typeof inputValue !== "string") actualValue = ""
    if(actualValue.length <= minChar) errors[label] = ` El ${labelStr} debe tener mas de ${minChar} caracteres.`
    if(actualValue.length >= maxChar) errors[label] = ` El ${labelStr} debe tener menos de ${maxChar} caracteres.`
    if(actualValue === "") errors[label] = ` Debes ingresar ${labelStr}.`

    if(!regex.test(inputValue)) errors[label] += ` El ${labelStr} debe contener caracteres válidos}.`
}

export const register = async (prevState, formData: FormData) => {
    const username = formData.get("username").toString()
    const userpassword = formData.get("userpassword").toString()

    const errors = {username: "", userpassword: ""}

    validateInput("username", username, errors)
    validateInput("userpassword", userpassword, errors)

    if(errors.username || errors.userpassword) {
        return {succcess: false, errors}
    }

    return {success: true, errors}
}