import { combineReducers } from "redux";
import milkReducer from "./milk/milkReducer";
import CakeReducer from "./cake/CakeReducer";
import userReducer from "./users/userReducer";

const rootReducers = combineReducers({
  cake: CakeReducer,
  milk: milkReducer,
  users: userReducer,
});
export default rootReducers;
