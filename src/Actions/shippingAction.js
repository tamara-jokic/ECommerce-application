import Axios from "axios";

export const MAKE_SHIPPING = "MAKE_SHIPPING";

export const makeShipping = (shipping) => (dispatch) => {
  Axios.post("/shippingInfo", shipping).then((res) => {
    dispatch({
      type: MAKE_SHIPPING,
      payload: shipping,
    });
  });
};
