import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Link, useHistory } from "react-router-dom";
import shoppingCart from "../../media/shoppingCart.png";
import imgAddFavorite from "../../media/heart-add-cart.png";
import imgDeleteFavorite from "../../media/heart-delete-cart.png";
import { alertInfo, alertWarning, alertSuccess } from "../../helpers/toast";
import accounting from "accounting";
import { useTranslation } from "react-i18next";
export default function ProductCard({
  name,
  price,
  image,
  id,
  discount,
  handleSaveCart,
}) {
  const { t, i18n } = useTranslation()
  const history = useHistory();
  let myUser = JSON.parse(localStorage.getItem("myUser"));


  const clickSaveCart = () => {
    let price = accounting.formatMoney(price, "U$D ", 0)
    handleSaveCart(name, price, image, id);
  };

  const discountedPrice = Math.floor(price*(100-discount)/100)

  return (
    <div className="card-clothe">
        <div className="card-body">
          <img className="card-image" src={`${image}`} alt={`${name}`} />
          <p className="card-title">{name}</p>
        </div>
      <div className="btn-wrapper">
        <button
          className="card-btn margin-1"
          onClick={() => handleSaveCart(name, price, image, id)}
        >
          <img className="cart-btn" src={shoppingCart} alt="add-cart" />
        </button>

        <div className="price">
          {discount > 0 ?
              <div>
                <p className="discounted">${price}</p>
                <p>${discountedPrice}</p>
              </div>
              :
              <p>${price}</p>
          }
        </div>
      </div>
    </div>
  );
}
