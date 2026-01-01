import { combineReducers } from "redux";
import reducer from "./cake/Reducer";
import iceReducer from "./ice-cream/Reducer";

const rootReducer = combineReducers({
    cake: reducer,
    iceReducer: iceReducer
});

export default rootReducer;