import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ProductCart } from "../ProductCart/ProductCart";

import accounting from "accounting";
import { useTranslation } from "react-i18next";
import "./Cart.scss";
import { useStore } from "../../context/store.js";
import { alertInfo, alertSuccess, alertWarning } from "../../helpers/toast";
import axios from "axios";

export const Cart = () => {
  const { t } = useTranslation();
  var user = JSON.parse(localStorage?.getItem("myUser"));
  let local = JSON.parse(localStorage.getItem(user));
  const history = useHistory();
  const [priceTotal, setPriceTotal] = useState(0);
  const [state, dispatch] = useStore();


  let { search } = useLocation();
  useEffect(() => {
    if (search === "?buy=false") {
      alertInfo(t("cart.cancelPurchaseSuccess"));
    }
    if (search === "?buy=noStock") {
      alertWarning(t("cart.noStock"));
      history.push('/home')
    }
    if (search === "?buy=true") {
      localStorage.removeItem(user);
      alertSuccess(t("cart.successfulPurchase"));
      state.cart = [];
    }


  }, [search]);



  // FUNCION PARA VER EL STORAGE, NO BORRAR
  const mostra = () => {
    let miStorage = window.localStorage;
  };

  //Funcion para limpiar carro
  const clearCart = (e) => {
    const answer = window.confirm(t("cart.confirmClearCart"));
    if (answer) {
      state.cart = []
      localStorage?.removeItem(user);
      alertInfo(t("cart.removeEverythingFromCart"));
      setTimeout(() => {
        history.push("/home");
      }, 2000);
    }
  };


  return (
    <section className="cart-container">
      <h2 className="cart-container-title">{t("cart.welcome")}</h2>
      <article className="cart-cards">
        {state.cart && state.cart?.length > 0 ? (
          React.Children.toArray(
            state.cart.map((el, index) => (
              <ProductCart
                name={el.name}
                price={el.price}
                id={el.id}
                image={el.image}
                pos={index}
              />
            ))
          )
        ) : (
          <h3>{t("cart.emptyCart")}</h3>
        )}
      </article>
      <div className="cart-chechout-section">
        {state.cart?.length >= 1 ? (
          <button
            className="button-danger"
            onClick={() => clearCart()}
            disabled={state.cart?.length < 1}
          >
            {t("cart.emptyTheCart")}
          </button>
        ) : null}
      </div>
    </section>
  );
};
