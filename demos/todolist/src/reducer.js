import {ADD_TODO, CHANGE_FILTER, CLEAR_COMPLETE_TODOS, SET_TODOS, UPDATE_TODO} from './actions';

import update from 'immutability-helper';

const initialState = {
    nextId: 1,
    todos: [],
    filter: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // return {
            //     nextId: state.nextId + 1,
            //     todos: state.todos.append([
            //         {id: state.nextId, text: action.payload, complete: false}
            //     ]),
            //     filter: state.filter
            // }
            return update(state, {
                nextId: {
                    $apply: (n) => n + 1
                },
                todos: {
                    $push: [
                        {
                            id: state.nextId,
                            text: action.payload,
                            complete: false
                        }
                    ]
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
            const maxId = Math.max(...todos.map(todo => todo.id));
            const nextId = maxId ? maxId + 1 : 1;
            return update(state, {
                todos: {$set: todos},
                nextId: {$set: nextId}
            })
        default:
            return state;
    }
}

export default reducer;
