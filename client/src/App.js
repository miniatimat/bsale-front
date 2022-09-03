import "./App.css";
import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import UserCart from "./pages/UserCart/UserCart.jsx";
import Categories from "./components/Categories/Categories.jsx";
import SearchedProducts from "./pages/SearchedProducts/SearchedProducts";
import { ToastContainer } from "react-toastify";

//Cualquier ruta que tiene que solo estar disponible a usuario logueado, se le puede envolver en ProtectedRoutes
// import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <ToastContainer limit={3} />
        <Route exact path="/">
          {/* REDIRECT ROUTE (CAN USE TO FORCE UPDATE OF COMPONENTS) */}
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          {/* USER HOME  */}
          <NavBar />
          <Home />
        </Route>
        <Route path="/categories" exact>
          <NavBar />
          <Categories />
        </Route>
        <Route path="/search" exact>
          {/* ADMIN/USER SEARCHED PRODUCTS */}
          <NavBar />
          <SearchedProducts />
        </Route>

        <Route path="/cart" exact>
          {/* USER CART */}
          <NavBar />
          <UserCart />
        </Route>
      </Router>
    </>
  );
}

export default App;
