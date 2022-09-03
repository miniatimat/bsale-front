import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useStore } from "../../context/store";
import { Redirect, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader/Loader";
import "./categories.scss";
import { useTranslation } from "react-i18next";
import { alertInfo, alertSuccess, alertWarning } from "../../helpers/toast";
import { IoSearchSharp } from "react-icons/io5";

export default function Categories() {
  // let initialCart = JSON.parse(localStorage.getItem("myCart")) || [];
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useStore();
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  let person = JSON.parse(localStorage.getItem("myUser"));
  const history = useHistory();
  const handleRedirect = () => {
    if (!state.products.length) {
      setRedirect(true);
    }
  };

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

  const handleChangeMax = (e) => {
    setError("");
    if (e.target.value < 0) setError(t("categoriesComp.error_pos_numbers"));
    setMax(e.target.value);
  };

  const handleChangeMin = (e) => {
    setError("");
    if (e.target.value < 0) setError(t("categoriesComp.error_pos_numbers"));
    setMin(e.target.value);
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
