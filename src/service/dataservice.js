import axios from "axios"


//API for get book list
export const getBooksList = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response
}