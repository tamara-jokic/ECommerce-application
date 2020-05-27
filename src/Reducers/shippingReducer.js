import { MAKE_SHIPPING } from "../Actions/shippingAction";

const initState = {
  shippingInfo: [],
  shipping: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case MAKE_SHIPPING:
      return {
        ...state,
        shippingInfo: [...state.shippingInfo, action.payload],
      };
    default:
      return state;
  }
}
