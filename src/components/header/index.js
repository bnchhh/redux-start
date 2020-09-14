import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleModal } from "../../redux/actions/modal.actions";
import "./header.css";

const Header = ({totalItemsAmount, toggleModal }) => {
  return (
    <header className="App-header">
      <Link className="App-header-link" to="/">
        <h1 className="App-title">My simple shop</h1>
      </Link>
      <div className="items-block">
        <button className="add-button" onClick={toggleModal}>
          Add new product
        </button>
        <h2 className="cart-counter">Items in cart: {totalItemsAmount}</h2>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  const totalItemsAmount = state.cart.reduce((accum, item) => {
    return accum + item.quantity;
  }, 0);

  return { totalItemsAmount };
};

const mapDispatchToProps = { toggleModal };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
