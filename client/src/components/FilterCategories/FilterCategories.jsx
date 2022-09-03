import React, { useEffect, useState } from "react";
import { useStore } from "../../context/store";
import { Redirect, useHistory } from "react-router-dom";
import {
  CATEGORIES_PRODUCT,
  FETCH_PRODUCTS,
} from "../../redux/actions/actionTypes";
import { fetchCategories } from "../../redux/actions/actions.js";
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
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_DOMAIN}/product/filter`,
          {categories: e.target.value},

      );
      if (Array.isArray(res.data)) {
        dispatch({
          type: CATEGORIES_PRODUCT,
          payload: res.data,
        });

        setRedirect(true);
      } else {
        document.querySelectorAll("input[type=checkbox]").forEach((el) => {
          if (!state.filter.includes(el.value)) el.checked = false;
        });

        alertInfo(t("categoriesComp.noCats"));
        dispatch({
          type: FETCH_PRODUCTS,
          payload: state.products,
        });
      }
    } catch (err) {
      alert(err);
    }
  };



  useEffect(() => {
    setRedirect(false);
  }, []);
  useEffect(() => {
    fetchCategories(dispatch);
    document.querySelectorAll("input[type=checkbox]").forEach((el) => {
      if (state.filter.includes(el.value)) el.checked = true;
    });
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
