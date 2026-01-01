import { BUY_CAKE } from "./Types";

const initState = {
    numberOfCakes: 10,
};

const reducer = (state=initState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes-action.payload
        }
        default: return state
    }
};

export default reducer;