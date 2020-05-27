import { FETCH_SPORTS, DELETE_SPORTS } from "../Actions/sportsAction";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SPORTS:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_SPORTS:
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
