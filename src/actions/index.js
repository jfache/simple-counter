export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter(step) {
    return {
        type: INCREMENT_COUNTER,
        step
    };
}

export function decrementCounter(step) {
    return {
        type: DECREMENT_COUNTER,
        step
    };
}
