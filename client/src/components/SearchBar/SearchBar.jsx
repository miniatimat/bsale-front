import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import axios from "axios";
import { SEARCH_PRODUCT } from "../../redux/actions/actionTypes";
import { Link, Redirect } from "react-router-dom";
import { useStore } from "../../context/store";
import {searchProduct} from "../../redux/actions/actions";

export default function SearchBar() {
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useStore();
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [suggested, setSuggested] = useState([]);


  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(
        `${process.env.REACT_APP_DOMAIN}/product/search?name=${input}`
      );
      dispatch({
        type: SEARCH_PRODUCT,
        payload: res.data,
      });
      setInput("");
      setRedirect(true);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    setRedirect(false);
  }, []);


  return (
    <div className="nav-language-search nav-item">
      {redirect ? <Redirect push to="/search" /> : null}
      <form
        autoComplete="off"
        role="search"
        className="d-flex"
        onSubmit={handleSearch}
      >
        <div className="search-suggest-wrap">
          <input
            id="search"
            name="search"
            value={input}
            className="form-control search-bar "
            type="search"
            placeholder={"Buscar"}
            aria-label="Search"
            required
            onChange={handleChange}
          />
          {suggested.length ? (
            <div className="search-suggestions">
              <ul className="ul-suggestions">
                {suggested.map((product) => {
                  if (product.status === "active") {
                    return (
                      <Link key={product.id} to={`/home/${product.id}`}>
                        <li className="li-suggestion ">{product.name}</li>
                      </Link>
                    );
                  }
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
