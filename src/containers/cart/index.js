import React, { useCallback } from "react";
import { connect } from "react-redux";
import CartListItem from "../../components/cart-list-item";

import "./cart.css";

export function Cart({ cart }) {

  const renderCart = useCallback(() => {
    return cart.map((item, index) => (
      <CartListItem item={item} key={item.name} />
    ));
  }, [cart]);
  
  return (
    <div className="App-cart">
      {cart.length ? renderCart() : "Your cart is empty :("}
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Cart);
