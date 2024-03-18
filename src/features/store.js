// import { applyMiddleware, createStore } from "redux";
// import rootReducers from "./rootReducer";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";
import milkReducer from "./milk/milkSlice";
import userReducer from "./user/userSlice";

// this is the first method with redux
// const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

// second method with redux-toolkit
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: milkReducer,
    user: userReducer,
  },
});
export default store;
