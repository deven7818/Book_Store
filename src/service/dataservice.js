import axios from "axios"

const headerConfig = {
    headers: {
        // Authorization: localStorage.getItem('token')
        'x-access-token': localStorage.getItem('token')
    }
}

//API for get book list
export const getBooksList = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    return response
}

//API for cart item list
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



//add book to wishlist api
export const addTowishlistApi = (data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data.id}`,data,headerConfig);
    return response;
}



//API for wishlist item list
export const getWishlistItem = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",headerConfig)
    return response
}


//customer details
export const customerDetailsApi = async (signUpObj) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user//bookstore_user/edit_user", signUpObj)
    return response
}


//customer details
export const deleteCartItem = async (data) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${data.id}`, data, headerConfig)
    return response
}



//order summary api
export const orderSummaryApi = (orderObj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,orderObj,headerConfig);
    return response;
}
