import { combineReducers } from "redux";

import sportsReducer from "./sportsReducer";
import discountReducer from "./discountReducer";
import karateReducers from "./karateReducers";
import cartReducers from "./cartReducers";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import shippingReducer from "./shippingReducer";

export default combineReducers({
  popular: sportsReducer,
  discount: discountReducer,
  karate: karateReducers,
  cart: cartReducers,
  usersPosts: userReducer,
  productPosts: adminReducer,
  shippingInfo: shippingReducer,
});
