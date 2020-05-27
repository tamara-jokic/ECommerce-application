import Axios from "axios";
export const FILTER_KARATE_BY_SIZE = "FILTER_KARATE_BY_SIZE";
export const ORDER_KARATE_BY_PRICE = "ORDER_KARATE_BY_PRICE";
export const FETCH_KARATE = "FETCH_KARATE";
export const MAKE_KARATE = "MAKE_KARATE";

export const fetchKarate = () => (dispatch) => {
  fetch("http://localhost:3000/karate")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.karate)
    )
    .then((data) => {
      dispatch({ type: FETCH_KARATE, payload: data });
    });
};

export const makeKarate = () => (dispatch) => {
  Axios.post("http://localhost:5000/api/makeKarate").then((res) => {
    dispatch({
      type: MAKE_KARATE,
      payload: res.data,
    });
  });
};

export const filterProducts = (karate, size) => (dispatch) => {
  dispatch({
    type: FILTER_KARATE_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? karate
          : karate.filter(
              (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const karate = items.slice();
  if (sort !== "") {
    karate.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    karate.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_KARATE_BY_PRICE,
    payload: {
      sort: sort,
      items: karate,
    },
  });
};
