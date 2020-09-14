import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
} from "../actions/cart.actions";

export default (state = [], action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state;

    case ADD_TO_CART: {
      const { name, price, available } = action.payload;

      //if we have same item added twice
      const itemIndex = state.findIndex((x) => x.name === name);

      if (itemIndex !== -1) {
        const copiedState = [...state];
        const duplicateItem = copiedState[itemIndex];
        duplicateItem.quantity++;

        return copiedState;
      }

      return [{ name, price, available, quantity: 1 }, ...state];
    }

    case REMOVE_FROM_CART: {
      const { name } = action.payload;

      return state.filter((item) => item.name !== name);
    }

    case CHANGE_QUANTITY: {
      const { name, quantity } = action.payload;

      return state.map((item) => {
        return item.name === name
          ? { ...item, quantity}
          : item;
      });
    }

    default:
      return state;
  }
};
