import { createStore, applyMiddleware } from "redux";
// import reducer from "./cake/Reducer";
import logger from "redux-logger";
import rootReducer from "./rootReducer";


const store = createStore(rootReducer, applyMiddleware(logger)); //reducer

export default store;