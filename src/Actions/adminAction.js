import Axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const MAKE_PRODUCT = "MAKE_PRODUCT";

export const fetchProducts = () => (dispatch) => {
  Axios.get("/products").then((res) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  });
};

export const makeProduct = (product) => (dispatch) => {
  console.log(product);
  Axios.post("/products", product).then((res) => {
    dispatch({
      type: MAKE_PRODUCT,
      payload: product,
    });
  });
};
