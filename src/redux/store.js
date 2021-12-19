import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const reducers = {
  user: userReducer,
  cart: cartReducer,
};
const middlwares = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: reducers,
  middleware: middlwares,
});
