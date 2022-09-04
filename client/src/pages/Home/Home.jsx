import React, {useEffect, useState} from "react";
import "./Home.scss";
import {useStore} from "../../context/store";
import {fetchCategories, fetchProducts} from "../../redux/actions/actions";
import ProductCard from "../../components/ProductCard/ProductCard";
import {alertInfo, alertSuccess} from "../../helpers/toast";
import {Redirect} from "react-router-dom";


export default function Home() {
  const [state, dispatch] = useStore();
  const [inCart, setInCart] = useState(false);




  useEffect(async ()=>{
    await fetchProducts(dispatch)
    await fetchCategories(dispatch)
  }, [])

  const handleSaveCart = (name, price, image, id) => {
    let quantity = 1;
    let products = { name, price, image, id, quantity};
    let value = state.cart.find((e) => e.name === name);
    if (value) {
      setInCart(false);
      alertInfo("El producto ya esta en el carro");
    } else {
      setInCart(true);
      state.cart.push(products);
      alertSuccess("Producto agregado al carro");
    }
  };
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
