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
      removeFromCart({ id: item.id });
      changeAvailability({
        id: item.id,
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
        id: item.id,
        quantity: Number(event.target.value),
      });
      changeAvailability({
        id: item.id,
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
      <div className="control-block">
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
    </div>
  );
};

const mapDispatchToProps = {
  removeFromCart,
  changeAvailability,
  changeQuantity,
};
export default connect(null, mapDispatchToProps)(CartListItem);
