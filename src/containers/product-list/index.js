import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import ProductListItem from "../../components/product-list-item";
import "./product-list.css";

const sortingFunction = (el1, el2, sortingProp) => {
  if (el1[sortingProp] > el2[sortingProp]) return 1;
  if (el1[sortingProp] < el2[sortingProp]) return -1;
  return 0;
};

export function ProductList({ products }) {
  const [sortingProp, setSortingProp] = useState("name");

  const renderProducts = useCallback(() => {
    const copyForSort = [...products];
    copyForSort.sort((el1, el2) => sortingFunction(el1, el2, sortingProp));

    return copyForSort.map((item) => (
      <ProductListItem key={item.name} item={item} />
    ));
  }, [sortingProp, products]);

  return (
    <>
    <select
        value={sortingProp}
        onChange={(event) => setSortingProp(event.target.value)}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="available">Availability</option>
      </select>
    <div className="App-product_list">
      {renderProducts()}
    </div>
  
  </>
  );
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps)(ProductList);
