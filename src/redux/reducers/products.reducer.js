import {
  ADD_NEW_PRODUCT,
  CHANGE_AVAILABILITY,
  GET_PRODUCT_LIST,
} from "../actions/products.action";

const initState = {
  products: [
    {
      name: "iPhone 4s",
      price: 200,
      available: 2,
    },
    {
      name: "Nokia 2110",
      price: 600,
      available: 0,
    },
    {
      name: "Samsung s3",
      price: 345,
      available: 2,
    },
    {
      name: "LG G2",
      price: 90,
      available: 1,
    },
    {
      name: "Nokia 9930",
      price: 250,
      available: 3,
    },
    {
      name: "iPhone X",
      price: 123,
      available: 4,
    },
    {
      name: "Meizu m9",
      price: 656,
      available: 23,
    },
    {
      name: "Sonny 9",
      price: 564,
      available: 234,
    },
    {
      name: "iPhone 6 plus",
      price: 434,
      available: 7,
    },
    {
      name: "Alcatel noname",
      price: 123,
      available: 7,
    },
  ],
};

export default (state = initState.products, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return state.products;
    case ADD_NEW_PRODUCT: {
      return state.concat(action.payload);
    }
    case CHANGE_AVAILABILITY: {
      const { name, prevQuantity = 0, quantity } = action.payload;
      return state.map((item) =>
        item.name === name
          ? { ...item, available: item.available + prevQuantity - quantity }
          : item
      );
    }

    default:
      return state;
  }
};
