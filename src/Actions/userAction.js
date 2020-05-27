import Axios from "axios";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => (dispatch) => {
  Axios.get("/user").then((res) => {
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  });
};
