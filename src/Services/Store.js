import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import rootReducer from "./Reducers/RootReducer";

const store = configureStore({reducer:rootReducer},applyMiddleware(ReduxThunk));

export default store;
