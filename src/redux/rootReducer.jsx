import { combineReducers } from "redux";
import milkReducer from "./milk/milkReducer";
import CakeReducer from "./cake/CakeReducer";

const rootReducers = combineReducers({cake:CakeReducer, milk:milkReducer});
export default rootReducers;
