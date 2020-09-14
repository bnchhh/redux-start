import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  changeQuantity,
} from "../../redux/actions/cart.actions";
import { changeAvailability } from "../../redux/actions/products.action";

const CartListItem = ({
  item,
  removeFromCart,
  changeAvailability,
  changeQuantity,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDelete = useCallback(
    (item) => {
      removeFromCart({ name: item.name });
      changeAvailability({
        name: item.name,
        prevQuantity: quantity,
        quantity: 0,
      });
      setQuantity(0);
    },
    [quantity, removeFromCart, changeAvailability]
  );

  const handleQuantityChange = useCallback(
    (event, item) => {
      changeQuantity({
        name: item.name,
        quantity: Number(event.target.value),
      });
      changeAvailability({
        name: item.name,
        prevQuantity: quantity,
        quantity: Number(event.target.value),
      });

      setQuantity(Number(event.target.value));
    },
    [quantity, changeQuantity, changeAvailability]
  );

  return (
    <div className="cart_list_item">
      <p>{item.name}</p>
      <p>Price: {item.price}</p>
      <input
        type="number"
        value={quantity}
        min="0"
        max={item.available}
        onChange={(event) => {
          handleQuantityChange(event, item);
        }}
      ></input>
      <button onClick={() => handleDelete(item)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = {
  removeFromCart,
  changeAvailability,
  changeQuantity,
};
export default connect(null, mapDispatchToProps)(CartListItem);
