import React from 'react'
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cart.actions";
import { changeAvailability } from "../../redux/actions/products.action";

const ProductListItem = ({ item, addToCart, changeAvailability }) => {
  return (
    <div className="product_list_item">
      <p>{item.name}</p>
      <p>Price: {item.price}</p>
      <p>{item.available > 0 ? "In stock" : "Sold out"}</p>
      {item.available ? (
        <button
          className="add-to-cart-btn"
          onClick={() => {
            addToCart(item);
            changeAvailability({ name: item.name, quantity: 1 });
          }}
        >
          Add to cart
        </button>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = { addToCart, changeAvailability };
export default connect(null, mapDispatchToProps)(ProductListItem);
