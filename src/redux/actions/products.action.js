export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const CHANGE_AVAILABILITY = 'CHANGE_AVAILABILITY'

export const getProductList = payload => ({type: GET_PRODUCT_LIST, payload});
export const addNewProduct = payload => ({type: ADD_NEW_PRODUCT, payload});
export const changeAvailability = payload => ({type: CHANGE_AVAILABILITY, payload})