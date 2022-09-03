import React, { useState } from "react";
import "./ProductCart.scss";
import accounting from "accounting";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import {useStore} from "../../context/store";
import {alertInfo} from "../../helpers/toast";


export const ProductCart = ({
  name,
  stock,
  price,
  image,
  pos,
}) => {
  let user = JSON.parse(localStorage.getItem("myUser"));
  let yourStorage = JSON.parse(localStorage.getItem(user));
  const [storageCart, setStorageCart] = useState(yourStorage);
  const [permitLess, setPermitLess] = useState(false);
  const [permitMore, setPermitMore] = useState(true);
  const [state, dispatch] = useStore()
  const [count, setCount] = useState(state.cart[pos].quantity);

  const { t } = useTranslation()

  const deleteDatatoStorage = (name) => {
    state.cart = state.cart.filter(product => product.name !== name)

    alertInfo(t("cart.removeFromCart"));
  };

  const oneMore = (stock, name, price) => {
    setCount(count + 1);
    if (count + 1 > 1) setPermitLess(true);
    if (count + 1 === stock) setPermitMore(false);
    changeAmount(count, name, 1, price);
  };


  //Funcion para restar producto al carro
  const oneLess = (stock, name, price) => {
    setCount(count - 1);
    if (count - 1 < 2) setPermitLess(false);
    if (count - 1 < stock) setPermitMore(true);
    changeAmount(count, name, -1, price);
  };

  let changeAmount = (num, name, SoR, price) => {
    let articleStogare = state.cart.find((e) => e.name === name);
    articleStogare.quantity = num + SoR;
    articleStogare.totalPrice = Math.round(price * (count + SoR));
    setStorageCart(yourStorage);
    localStorage.setItem(user, JSON.stringify(yourStorage));
  };

  return (
    <div className="card-body-cart">
      <img src={image} alt={name} className="card-image-cart" />
      <div className="cart-info-wrapper">
        <div className="cart-info-details">
          <p className="cart-info-title">{name}</p>
          <p className="cart-info-price">
            {accounting.formatMoney(price, "$ ", 0)}
          </p>
          <div className="cart-info-prices">
            <div className="cart-sum">
              <span>{t("cart.qty") }{state.cart[pos].quantity}</span>
              <div className="cart-btn-sum">
                {count !== stock ? (
                  <button
                    className="cart-btn-sum-plus"
                    onClick={() => oneMore(stock, name, price)}
                  >
                    <FiPlusSquare size={25} />
                  </button>
                ) : null}
                {count !== 1 ? (
                  <button
                    className="cart-btn-sum-minus"
                    onClick={() => oneLess(stock, name, price)}
                  >
                    <FiMinusSquare size={25} />
                  </button>
                ) : null}
              </div>
            </div>
            <p>
              TOTAL:
              <span className="cart-info-total">
                {accounting.formatMoney(price * count, "U$D ", 0)}
              </span>
            </p>
          </div>
        </div>
        <div
          to=""
          className="cart-del-prod"
          onClick={() => deleteDatatoStorage(name)}
        >
          <MdDeleteForever size={30} />
        </div>
      </div>
      {/* <button onClick={() => viewProduct(id)}>Ver</button> */}
    </div>
  );
};
