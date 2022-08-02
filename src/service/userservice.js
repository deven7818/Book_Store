import axios from "axios";

export const logInService = async (logInObj) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", logInObj)
    return response
}

export const signUpService = async (signUpObj) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", signUpObj)
    return response
}

