import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import cartReducer from "./cart.reducer";
import modalReducer from "./modal.reducer";

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  modal: modalReducer
});
