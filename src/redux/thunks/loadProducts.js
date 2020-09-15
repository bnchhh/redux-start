import {getProductList} from '../actions/products.action'

const loadProducts = () => async (dispatch, getState) => {
    const responce = await fetch('/products');
    const products = await responce.json();;

    dispatch(getProductList(products));
}

export default loadProducts;