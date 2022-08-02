import axios from "axios"


export const getBooksList = async () => {
    // console.log();
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response
}