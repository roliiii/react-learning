import { INC, DEC } from "./Actions"

export function reducer(state = {counter : 1}, action) {
    switch (action.type) {
        case INC:
            return {
                counter: state.counter + 1
            }
        case DEC:
            return {
                counter: state.counter - 1
            }
    
        default:
            return state
    }
}