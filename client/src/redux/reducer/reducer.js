import {
  FETCH_PRODUCTS,
  SEARCH_PRODUCT,
  FETCH_CATEGORIES,
  ORDER_BY_ASCDESC_PRICE,
  CATEGORIES_PRODUCT,
  SORTED_PRICE_PRODUCTS,
} from "../actions/actionTypes";

export const initialState = {
  products: [],
  searchedProducts: [],
  categories: [],
  cart:[]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,        
      };
    }
    case SORTED_PRICE_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case SEARCH_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case CATEGORIES_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }


    case ORDER_BY_ASCDESC_PRICE: {
      let order;

      if (action.payload === "ASCENDING") {
        order = state.searchedProducts.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "DESCENDING") {
        order = state.searchedProducts.sort(function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
      };
    }

    case FETCH_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducer;
