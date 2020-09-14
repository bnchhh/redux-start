import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import SideBar from "./components/sidebar";
import Header from "./components/header";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";
import AddItemDialog from "./components/add-item-dialog";

// CSS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App-wrapper">
          <SideBar />
          <AddItemDialog />
          <div className="items-container">
            <Switch>
              <Route path="/" exact>
                <ProductList />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
