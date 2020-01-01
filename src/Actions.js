/*
 * action types
 */

export const INC = "INCREMENT"
export const INC_DELAYED = "INCREMENT_DELAYED"
export const DEC = "DECREMENT"


/*
 * action creators
 */
export function incrementCounter() {
    return {type : INC}
}

export function incrementDelay() {
    return {type : INC_DELAYED}
}

export function decrementCounter() {
    return {type : DEC}
}

