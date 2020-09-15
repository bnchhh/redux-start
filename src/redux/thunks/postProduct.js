import { addNewProduct } from "../actions/products.action";

const postProduct = ({ item }) => async (dispatch, getState) => {
  const body = JSON.stringify(item);
  await fetch("/products", {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'post',
    body
  });

  dispatch(addNewProduct(item));
};

export default postProduct;
