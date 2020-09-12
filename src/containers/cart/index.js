import React, { useCallback } from "react";
import { connect } from "react-redux";

import {
  changeQuantity,
  removeFromCart,
} from "../../redux/actions/cart.actions";

import "./cart.css";

export function Cart({ cart, changeQuantity, removeFromCart }) {
  
  const renderCart = useCallback(() => {
    return cart.map((item, index) => (
      <div className="cart_list_item" key={index}>
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <input
          type="number"
          value={item.quantity}
          min="0"
          onChange={(event) =>
            changeQuantity({ name: item.name, quantity: event.target.value })
          }
        ></input>
        <button onClick={() => removeFromCart({name: item.name})}>Delete</button>
      </div>
    ));
  }, [cart, changeQuantity, removeFromCart]);

  return (
    <div className="App-cart">
      {cart.length ? renderCart() : "Your cart is empty :("}
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = {
  changeQuantity,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
