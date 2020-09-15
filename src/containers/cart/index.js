import React, { useCallback } from "react";
import { connect } from "react-redux";
import CartListItem from "../../components/cart-list-item";

import "./cart.css";

export function Cart({ cart, summary}) {
  const nextClickHandler = useCallback(() => {
    if (!cart.length) {
      alert('You have nothing in cart!');
      return;
    }

    alert(
      `You've succesfully purchased your cart items. Your summary: ${summary}$`
    );
  }, [cart, summary]);
  const renderCart = useCallback(() => {
    return cart.map((item, index) => (
      <CartListItem item={item} key={item.name} />
    ));
  }, [cart]);

  return (
    <div className="App-cart">
      {cart.length ? renderCart() : "Your cart is empty :("}
      <button className='purchase-button' onClick={nextClickHandler}>Next</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  summary: state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
});

export default connect(mapStateToProps)(Cart);
