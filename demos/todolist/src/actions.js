export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_COMPLETE_TODOS = 'CLEAR_COMPLETE_TODOS';

// const makeActionCreator = function (type) {
//     return function (payload) {
//         return {
//             type: type,
//             payload: payload
//         }
//     }
// }

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}

export const changeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}

export const clearCompleteTodos = () => {
    return {
        type: CLEAR_COMPLETE_TODOS
    }
}
