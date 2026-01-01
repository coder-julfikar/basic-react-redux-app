import { createStore } from "redux";
import reducer from "./cake/Reducer";

const store = createStore(reducer);

export default store;