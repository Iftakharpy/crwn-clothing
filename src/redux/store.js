import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./features/user/userSlice";

const reducers = {
  user: userReducer,
};
const middlwares = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: reducers,
  middleware: middlwares,
});
