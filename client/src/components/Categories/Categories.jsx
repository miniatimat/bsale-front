import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useStore } from "../../context/store";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./categories.scss";
import { alertInfo, alertSuccess } from "../../helpers/toast";

export default function Categories() {
  // let initialCart = JSON.parse(localStorage.getItem("myCart")) || [];

  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useStore();
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [user, setUser] = useState([]);


  const handleSaveCart = (name, price, image, id) => {
    let quantity = 1;
    let totalPrice = price;
    let products = { name, price, image, id, quantity};
    let value = state.cart.find((e) => e.name === name);
    if (value) {
      setInCart(false);
      alertInfo("Producto ya en carro");
    } else {
      setInCart(true);
      state.cart.push(products);
      alertSuccess("Producto agregado al carro");
    }
  };




  useEffect(() => {
    let myUser = JSON.parse(localStorage.getItem("myUser"));
    let myCart = JSON.parse(localStorage.getItem(myUser));
    setUser(myUser);
    if (myCart) {
      setCart(myCart);
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(user, JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="searched-container">

      {redirect ? <Redirect push to="/home" /> : null}
      <div className="section-products">
        {state.products.length>0? state.products.map((product) => {
              if ( typeof (product.url_image) == "string" && product.url_image !== "") {
                return (<ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    stock={product.stock}
                    price={product.price}
                    image={product.url_image}
                    discount={product.discount}
                    handleSaveCart={handleSaveCart}
                />)
              }
            }):
           null
        }
      </div>
    </div>
  );
}
