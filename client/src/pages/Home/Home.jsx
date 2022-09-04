import React, {useEffect, useState} from "react";
import "./Home.scss";

import { useTranslation } from "react-i18next";
import {useStore} from "../../context/store";
import {fetchCategories, fetchProducts} from "../../redux/actions/actions";
import ProductCard from "../../components/ProductCard/ProductCard";
import {alertInfo, alertSuccess, alertWarning} from "../../helpers/toast";
import {Redirect} from "react-router-dom";


function NotFound() {
  return null;
}

export default function Home() {
  const { t } = useTranslation();
  let initialCart = JSON.parse(localStorage.getItem("myCart")) || [];
  const [state, dispatch] = useStore();
  const [inCart, setInCart] = useState(false);
  const [cart, setCart] = useState(initialCart);



  useEffect(async ()=>{
    await fetchProducts(dispatch)
    await fetchCategories(dispatch)
  }, [])

  const handleSaveCart = (name, price, image, id) => {
    let quantity = 1;
    let totalPrice = price;
    let products = { name, price, image, id, quantity};
    let value = state.cart.find((e) => e.name === name);
    if (value) {
      setInCart(false);
      alertInfo(t("home.altAlreadyInCart"));
    } else {
      setInCart(true);
      state.cart.push(products);
      alertSuccess(t("home.altAddToCart"));
    }
  };

  console.log(state)
  return (
      <div className="searched-container">

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
              <Redirect push to="/home"/>
          }
        </div>
      </div>
  );
}
