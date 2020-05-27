import { FETCH_PRODUCTS, MAKE_PRODUCT } from "../Actions/adminAction";

const initState = {
  products: [],
  product: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case MAKE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
