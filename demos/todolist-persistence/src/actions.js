import request from 'superagent';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_COMPLETE_TODOS = 'CLEAR_COMPLETE_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const setTodos = (todos) => {
    return {type: SET_TODOS, payload: todos}
}

export const addTodoWithoutPersistence = (todo) => {
    return {type: ADD_TODO, payload: todo}
}

export const addTodo = (text) => {
    return (dispatch) => {
        request.post("/todos").send({text: text, complete: false}).then(res => {
            dispatch(addTodoWithoutPersistence(res.body))
        })
    }
}

export const updateTodoWithoutPersistence = (todo) => {
    return {type: UPDATE_TODO, payload: todo}
}

export const updateTodo = (todo) => {
    return (dispatch) => {
        request.patch(`/todos/${todo.id}`).send(todo).then(res => {
            dispatch(updateTodoWithoutPersistence(todo))
        })
    }
}

export const changeFilter = (filter) => {
    return {type: CHANGE_FILTER, payload: filter}
}

export const clearCompleteTodos = () => {
    return {type: CLEAR_COMPLETE_TODOS}
}
