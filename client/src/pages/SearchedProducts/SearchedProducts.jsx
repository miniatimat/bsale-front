import React, { useEffect, useState } from "react";
import "./SearchedProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useStore } from "../../context/store";
import { Link, Redirect, useHistory } from "react-router-dom";
import {alertSuccess, alertInfo, alertWarning, alertError} from "../../helpers/toast";
import { useTranslation } from "react-i18next";


export default function SearchedProducts() {
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useStore();
  const [error, setError] = useState("");
  const [inCart, setInCart] = useState(false);
  const history = useHistory();


  const handleSaveCart = (name, price, image, id) => {
    let quantity = 1;
    let totalPrice = price;
    let products = { name, price, image, id, quantity};
    let value = state.cart.find((e) => e.name === name);
    if (value) {
      setInCart(false);
      alertInfo("El producto ya se encuentra en el carrito");
    } else {
      setInCart(true);
      state.cart.push(products);
      alertSuccess("producto agregado al carrito");
    }
  };

  return (
    <div className="searched-container">

      {redirect ? <Redirect push to="/home" /> : null}
      <span>{error && <p>{error}</p>}</span>
      <div className="section-products">
        {state.products.length>0? state.products.map((product) => {
              if ( typeof (product.url_image) == "string" && product.url_image !== "") {
                return (<ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.url_image}
                    discount={product.discount}
                    handleSaveCart={handleSaveCart}
                />)
              }
            }):
              <Redirect to="/home"/>
          }
      </div>
    </div>
  );
}
