import Axios from "axios";

export const FETCH_SPORTS = "FETCH_SPORTS";
export const DELETE_SPORTS = "DELETE_SPORTS";

export const fetchSports = () => (dispatch) => {
  Axios.get("http://localhost:5000/api/getPopular").then((res) => {
    console.log(res.data);
    dispatch({
      type: FETCH_SPORTS,
      payload: res.data,
    });
  });

};

export const deleteSports = (id) => (dispatch) => {
  Axios.delete("/popular/" + id).then((res) => {
    dispatch({
      type: DELETE_SPORTS,
      id: id,
    });
  });
};
