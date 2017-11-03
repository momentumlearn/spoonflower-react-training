import {createStore} from 'redux';

const initialState = {
    count: 0
}

const incr = (amount = 1) => {
    return {
        type: 'INCR',
        amount
    }
}

const decr = (amount = 1) => {
    return {
        type: 'DECR',
        amount
    }
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'INCR':
            return {
                count: prevState.count + action.amount
            }
        case 'DECR':
            return {
                count: prevState.count - action.amount
            }
        default:
            return prevState;
    }
}

test('redux works', () => {
    const store = createStore(reducer);

    store.dispatch(incr())
    store.dispatch(incr())
    store.dispatch(decr())
    store.dispatch(incr(2))

    expect(store.getState().count).toEqual(3);
});
