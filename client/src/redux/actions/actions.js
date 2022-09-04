import axios from "axios";
import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
    CATEGORIES_PRODUCT,
    SEARCH_PRODUCT
} from "./actionTypes";

export const fetchProducts = async (dispatch) => {
  const fetchedProducts = await axios.get(
    `${process.env.REACT_APP_DOMAIN}/product/`
  );
  dispatch({
    type: FETCH_PRODUCTS,
    payload: fetchedProducts.data,
  });
};

export const fetchCategories = async (dispatch) => {
  const fetchedProducts = await axios.get(
    `${process.env.REACT_APP_DOMAIN}/category/`
  );
  dispatch({
    type: FETCH_CATEGORIES,
    payload: fetchedProducts.data,
  });
};

export const filterByCategories = async (dispatch, payload)=>{
  const filteredProducts = await axios.post(
      `${process.env.REACT_APP_DOMAIN}/product/filter`,{categories: payload}
  )
  dispatch({
    type: CATEGORIES_PRODUCT,
    payload: filteredProducts.data
  })
}

export const searchProduct = async (dispatch, input)=>{
  console.log("Searchproduct", input)
    const res = await axios.get(
        `${process.env.REACT_APP_DOMAIN}/product/search?name=${input}`
    );
    dispatch({
      type: SEARCH_PRODUCT,
      payload: res.data,
    });
}



