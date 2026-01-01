import { combineReducers } from "redux";
import reducer from "./cake/Reducer";
import iceReducer from "./ice-cream/Reducer";
import { usersReducer } from "./users/Reducer";

const rootReducer = combineReducers({
    cake: reducer,
    iceReducer: iceReducer,
    userList: usersReducer
});

export default rootReducer;