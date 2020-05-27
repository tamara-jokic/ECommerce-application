import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, kproduct) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === kproduct.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...kproduct, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, kproduct) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== kproduct.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
