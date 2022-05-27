import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useStore } from "../../context/store";
import { Redirect } from "react-router-dom";
import { SORT_BY_PRICE } from "../../redux/actions/actionTypes";
export default function SearchedProducts() {
  let initialCart = JSON.parse(localStorage.getItem("myCart")) || [];
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useStore();
  const [cart, setCart] = useState(initialCart);

  console.log("Hola ",state.searchedProducts)

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);
  const handleRedirect = () => {
    if (!state.searchedProducts.length) {
      setRedirect(true);
    }
  };
  const handleSaveCart = (name, price, image, id, stock) => {
    let products = { name, price, image, id, stock };
    console.log(products);

    setCart((cart) => [...cart, products]);
  };
  useEffect(() => {
    handleRedirect();
  }, []);
  const handleOrder= (e) =>{
    e.preventDefault();
    dispatch({
      type: SORT_BY_PRICE,
     payload: e.target.value
    });
   
  }
  return (
    <div>
      <select          
         onChange={(e) => {
          handleOrder(e);
        }}
        >
          <option value="" selected>
            Sort !
          </option>
          <option value="ASCENDING">⬇</option>
          <option value="DESCENDING">⬆  </option>
        </select>
      {console.log(state.searchedProducts, "soy el state global", redirect)}
      {redirect ? <Redirect push to="/home" /> : null}
      {state.searchedProducts &&
        React.Children.toArray(
          state.searchedProducts.map((product) => {
            return (
              <ProductCard
                id={product.id}
                name={product.name}
                stock={product.stock}
                // key={product.id}
                price={product.price}
                image={product.image}
                handleSaveCart={handleSaveCart}
              />
            );
          })
        )}
    </div>
  );
}
