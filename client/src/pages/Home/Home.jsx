import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
/* import axios from "axios"; */
import { useStore } from "../../context/store.js";
import { fetchProducts, fetchCategories } from "../../redux/actions/actions.js";
import "./Home.css";
/* import { CATEGORIES_PRODUCT } from "../../redux/actions/actionTypes"; */
import FilterCategoies from "../../components/FilterCategories/FilterCategories"

export default function Home() {
  let initialCart = JSON.parse(localStorage.getItem("myCart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [state, dispatch] = useStore();
  const [inCart, setInCart] = useState(false);

  const handleSaveCart = (name, price, image, id, stock) => {
    let amount = 1;
    let totalPrice = price;
    let products = { name, price, image, id, stock, amount, totalPrice };
    let value = cart.find((e) => e.name === name);
    if (value) {
      setInCart(false);
      return;
    } else {
      setInCart(true);
      setCart((cart) => [...cart, products]);
    }
  };

  //USEEFFECT CARGA DE PRODUCTOS
  useEffect(() => {
    fetchProducts(dispatch);
  }, []);
  useEffect(() => {
    fetchCategories(dispatch);
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  const mostra = () => {
    let miStorage = JSON.parse(localStorage.getItem("myUser"));
    console.log(miStorage);
  };

  return (
    <section className="section-products">
<FilterCategoies/>
      {state.products &&
        React.Children.toArray(
          state.products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                name={product.name}
                stock={product.stock}
                price={product.price}
                image={product.image}
                handleSaveCart={handleSaveCart}
              />
            );
          })
        )}
    </section>
  );
}
