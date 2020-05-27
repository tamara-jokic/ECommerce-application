import {
  FETCH_KARATE,
  MAKE_KARATE,
  FILTER_KARATE_BY_SIZE,
  ORDER_KARATE_BY_PRICE,
} from "../Actions/karateActions";

const initState = { items: [], filteredItems: [], size: "", sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_KARATE:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case MAKE_KARATE:
      return {
        ...state,
        karate: [...state.karate, action.payload],
      };
    case FILTER_KARATE_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_KARATE_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}
