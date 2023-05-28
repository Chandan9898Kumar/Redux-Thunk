import { combineReducers } from "redux";
import productReducer from "./Reducer";

const rootReducer = combineReducers({
  Products: productReducer,
});

export default rootReducer;
