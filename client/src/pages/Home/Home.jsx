import React, {useEffect, useState} from "react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "./Home.scss";
import banner1 from "media/banner1.jpg";
import banner2 from "media/banner2.jpg";
import banner4 from "media/banner4.jpg";
import PromoCard from '../../components/PromoCard.jsx/PromoCard.jsx';
import { BsCreditCard2Back } from "react-icons/bs";
// import { TbTruck } from "react-icons/tb";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import {useStore} from "../../context/store";
import {fetchCategories, fetchProducts} from "../../redux/actions/actions";
import ProductCard from "../../components/ProductCard/ProductCard";
import {alertInfo, alertSuccess, alertWarning} from "../../helpers/toast";


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
    <div className="color">
      <div className="div-slide-vertical">

      </div>
      <div className="promo-container">
        <div className="cardsContainer">
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
              <NotFound/>
          }
        </div>
      </div>
    </div>
  );
}
