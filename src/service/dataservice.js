import axios from "axios"

const headerConfig = {
    headers: {
        // Authorization: localStorage.getItem('token')
        // Authorization: localStorage.getItem('token')
        'x-access-token': localStorage.getItem('token')
    }
}

//API for get book list
export const getBooksList = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    return response
}

//API for get book list
export const getCartItem = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",headerConfig)
    return response
}


// //API for post book list
// export const cartItem = async (addcartItem) => {
//     let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/{product_id}",addcartItem,headerConfig)
//     return response
// }

//add to cart api
export const addToBagApi = (addBagObj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${addBagObj}`,null,headerConfig);
    return response;
}


//update cart api
export const updateApi = (data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${data.id}`,data,headerConfig);
    return response;
}