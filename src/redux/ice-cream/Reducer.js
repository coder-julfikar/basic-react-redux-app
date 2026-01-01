import { BUY_ICECREAMS } from "./Types";

const initState = {
    numberOfIceCream: 20,
};

const iceReducer = (state=initState, action) => {
    switch(action.type) {
        case BUY_ICECREAMS: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream-1
        }
        default: return state
    }
};

export default iceReducer;