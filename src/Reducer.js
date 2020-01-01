import { INC, DEC, INC_DELAYED } from "./Actions"

export function reducer(state = {counter : 1}, action) {
    switch (action.type) {
        case INC:
            return {
                counter: state.counter + 1
            }
        case INC_DELAYED:
            console.log("I am called too (reducer)")
            return state
        case DEC:
            return {
                counter: state.counter - 1
            }
    
        default:
            return state
    }
}