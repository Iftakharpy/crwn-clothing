import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// Local Storage
import storage from "redux-persist/lib/storage";
// // Session Storage
// import storageSession from "redux-persist/lib/storage/session";

// // State Reconciler
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// // autoMergeLevel1 (default)
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import logger from "redux-logger";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import directoryReducer from "./features/directory/directorySlice";
import shopReducer from "./features/shop/shopSlice";
import siteDefaultsReducer from "./features/defaults/defaultSlice";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  defaults: siteDefaultsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["user"],
  // whitelist: ["cart"],
  // stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger]),
});
