import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import SideBar from "./components/sidebar";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";

// CSS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">My simple shop</h1>
          </Link>
        </header>

        <div className="App-wrapper">
          <SideBar />
          <Switch>
            <Route path="/" exact>
              <ProductList />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
