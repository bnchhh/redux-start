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
      const { id, name, price, available } = action.payload;

      //if we have same item added twice
      const itemIndex = state.findIndex((x) => x.id === id);

      if (itemIndex !== -1) {
        const copiedState = [...state];
        const duplicateItem = copiedState[itemIndex];
        duplicateItem.quantity++;

        return copiedState;
      }

      return [{ id, name, price, available, quantity: 1 }, ...state];
    }

    case REMOVE_FROM_CART: {
      const { id } = action.payload;

      return state.filter((item) => item.id !== id);
    }

    case CHANGE_QUANTITY: {
      const { id, quantity } = action.payload;

      return state.map((item) => {
        return item.id === id
          ? { ...item, quantity}
          : item;
      });
    }

    default:
      return state;
  }
};
