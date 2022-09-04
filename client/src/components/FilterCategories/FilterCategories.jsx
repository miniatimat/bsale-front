import React, { useEffect, useState } from "react";
import { useStore } from "../../context/store";
import { Redirect, useHistory } from "react-router-dom";
import {
  CATEGORIES_PRODUCT,
  FETCH_PRODUCTS,
} from "../../redux/actions/actionTypes";
import {fetchCategories, fetchProducts, filterByCategories} from "../../redux/actions/actions.js";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { alertInfo } from "../../helpers/toast";
import "./FilterCategories.scss";
export default function FilerCategories() {
  const { t } = useTranslation();
  const [state, dispatch] = useStore();
  const [redirect, setRedirect] = useState(false);

  const history = useHistory();
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(e.target.value)

    if (e.target.value === ""){
      await fetchProducts(dispatch)
    }else {
      await filterByCategories(dispatch, e.target.value)
    }
  };

  useEffect(() => {
    setRedirect(false);
  }, []);


  return (
    <section className="categories-section">
      {redirect ? <Redirect push to="/categories" /> : null}
      <form
        onSubmit={(e) => {
        }}
      >
        <div className="scroll-categories">
          {state.categories.map((categories) => (
            <option
              key={categories.name}
              label={categories.name}
              value={categories.id}

              className="label-category dropdown-item category-list-item " onClick={handleSearch}
            >
              {categories.name}
            </option>
          ))}
        </div>
        <li className="dropdown-divider"></li>
      </form>
    </section>
  );
}
