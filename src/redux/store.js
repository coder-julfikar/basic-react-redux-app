import { createStore, applyMiddleware } from "redux";
// import reducer from "./cake/Reducer";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(logger, thunk)); //reducer

export default store;