import React, { useState, useCallback, useEffect} from "react";
import { connect } from "react-redux";
import ProductListItem from "../../components/product-list-item";
import loadProducts from '../../redux/thunks/load'

import "./product-list.css";

const sortingFunction = (el1, el2, sortingProp) => {
  if (el1[sortingProp] > el2[sortingProp]) return 1;
  if (el1[sortingProp] < el2[sortingProp]) return -1;
  return 0;
};

export function ProductList({ products, loadProducts}) {
  const [sortingProp, setSortingProp] = useState("name");

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const renderProducts = useCallback(() => {
    const copyForSort = [...products];
    copyForSort.sort((el1, el2) => sortingFunction(el1, el2, sortingProp));

    return copyForSort.map((item) => (
      <ProductListItem key={item.id} item={item} />
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
const mapDispatchToProps = {
  loadProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
