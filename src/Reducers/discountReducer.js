import { FETCH_DISCOUNT, DELETE_DISCOUNT } from "../Actions/discountAction";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DISCOUNT:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_DISCOUNT:
      return {
        ...state,
        items: state.items.splice(
          state.items.findIndex((item) => item.id === id),
          1
        ),
      };
    default:
      return state;
  }
}
