import {
  ADD_NEW_PRODUCT,
  CHANGE_AVAILABILITY,
  GET_PRODUCT_LIST,
} from "../actions/products.action";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return action.payload.products;
    case ADD_NEW_PRODUCT: {
      return state.concat(action.payload);
    }
    case CHANGE_AVAILABILITY: {
      const { id, prevQuantity = 0, quantity } = action.payload;
      return state.map((item) =>
        item.id === id
          ? { ...item, available: item.available + prevQuantity - quantity }
          : item
      );
    }

    default:
      return state;
  }
};
