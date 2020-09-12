export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const getCartItems = () => ({type: GET_CART_ITEMS});
export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload});
export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const changeQuantity = payload => ({type: CHANGE_QUANTITY, payload});