import {ADD_TODO, CHANGE_FILTER, CLEAR_COMPLETE_TODOS, SET_TODOS, UPDATE_TODO} from './actions';

import update from 'immutability-helper';

const initialState = {
    todos: [],
    filter: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return update(state, {
                todos: {
                    $push: [action.payload]
                }
            })
        case UPDATE_TODO:
            const todoId = action.payload.id;
            const idx = state
                .todos
                .findIndex(todo => todo.id === todoId);
            if (idx !== -1) {
                return update(state, {
                    todos: {
                        [idx]: {
                            $merge: action.payload
                        }
                    }
                });
            } else {
                return state;
            }
        case CHANGE_FILTER:
            return update(state, {
                filter: {
                    $set: action.payload
                }
            })
        case CLEAR_COMPLETE_TODOS:
            return update(state, {
                todos: {
                    $apply: (todos) => todos.filter(todo => !todo.complete)
                }
            })
        case SET_TODOS:
            const todos = action.payload;
            return update(state, {
                todos: {$set: todos}
            })
        default:
            return state;
    }
}

export default reducer;
