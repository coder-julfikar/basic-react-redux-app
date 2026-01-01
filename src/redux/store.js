import { createStore } from "redux";
import reducer from "./cake/Reducer";
import rootReducer from "./rootReducer";


const store = createStore(rootReducer); //reducer

export default store;