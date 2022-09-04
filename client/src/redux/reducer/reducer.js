import {
  FETCH_PRODUCTS,
  SEARCH_PRODUCT,
  FETCH_CATEGORIES,
  CATEGORIES_PRODUCT,
} from "../actions/actionTypes";

export const initialState = {
  products: [],
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
