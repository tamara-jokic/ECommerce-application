import Axios from "axios";

export const FETCH_DISCOUNT = "FETCH_DISCOUNT";
export const DELETE_DISCOUNT = "DELETE_DISCOUNT";

export const fetchDiscount = () => (dispatch) => {
  Axios.get("http://localhost:5000/api/getDiscount").then((res) => {
    dispatch({
      type: FETCH_DISCOUNT,
      payload: res.data,
    });
  });
};

export const deleteDiscount = (id) => (dispatch) => {
  Axios.delete("/discount/" + id).then((res) => {
    dispatch({
      type: DELETE_DISCOUNT,
      id: id,
    });
  });
};
