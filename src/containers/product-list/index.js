import React, { useCallback } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cart.actions";

import "./product-list.css";

export function ProductList({ products, addToCart }) {
  const renderProducts = useCallback(() => {
    return products.map((item, index) => (
      <div className="product_list_item" key={index}>
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <p>{item.available > 0 ? "In stock" : "Sold out"}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    ));
  }, [products, addToCart]);

  return <div className="App-product_list">{renderProducts()}</div>;
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
