import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/modal.actions";
import { addNewProduct } from "../../redux/actions/products.action";

import './add-item.css';

const AddItemDialog = ({ open, toggleModal, addNewProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailability] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    addNewProduct({ name, price, available });
    setName('');
    setPrice(0);
    setAvailability(0);
    toggleModal();
  };

  return (
    <dialog open={open} id="dialog">
      <form onSubmit={submitHandler}>
        <label>
          Item name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Item price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </label>
        <label>
          Item availability in store:
          <input
            type="number"
            name="availability"
            value={available}
            onChange={(event) => setAvailability(Number(event.target.value))}
          />
        </label>
        <menu>
          <button className='dialog-button' type="cancel">Cancel</button>
          <button className='dialog-button' type="submit">Confirm</button>
        </menu>
      </form>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  return { open: state.modal };
};

const mapDispatchToProps = {
  toggleModal,
  addNewProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemDialog);
