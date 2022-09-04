import React from "react";
import { useHistory } from "react-router-dom";
import { ProductCart } from "../ProductCart/ProductCart";
import "./Cart.scss";
import { useStore } from "../../context/store.js";
import { alertInfo } from "../../helpers/toast";

export const Cart = () => {
  const user = JSON.parse(localStorage?.getItem("myUser"));
  const history = useHistory();
  const [state, dispatch] = useStore();


  // FUNCION PARA VER EL STORAGE, NO BORRAR
  const mostra = () => {
    let miStorage = window.localStorage;
  };

  //Funcion para limpiar carro
  const clearCart = (e) => {
    const answer = window.confirm("Esta seguro que desea vaciar el carro?");
    if (answer) {
      state.cart = []
      localStorage?.removeItem(user);
      alertInfo("Carro vaciado");
      setTimeout(() => {
        history.push("/home");
      }, 2000);
    }
  };


  return (
    <section className="cart-container">
      <h2 className="cart-container-title">{"Tu Carro"}</h2>
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
          <h3>{"Tu carro esta vacio"}</h3>
        )}
      </article>
      <div className="cart-chechout-section">
        {state.cart?.length >= 1 ? (
          <button
            className="button-danger"
            onClick={() => clearCart()}
            disabled={state.cart?.length < 1}
          >
            {"Vaciar el carrito"}
          </button>
        ) : null}
      </div>
    </section>
  );
};
