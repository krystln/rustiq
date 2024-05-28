import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducers from "./feature/profileSlice";
import cartSlice from "./feature/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ profileReducers, cartSlice });
const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
});

const persistor = persistStore(store);

export { store, persistor };

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = AppStore["getState"];
export type AppDispatch = AppStore["dispatch"];
