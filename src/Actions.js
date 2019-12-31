/*
 * action types
 */

export const INC = "INCREMENT"
export const DEC = "DECREMENT"


/*
 * action creators
 */
export function  incrementCounter() {
    return {type : INC}
}

export function decrementCounter() {
    return {type : DEC}
}

