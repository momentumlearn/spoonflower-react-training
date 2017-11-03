import {addTodoWithoutPersistence, changeFilter, clearCompleteTodos, setTodos, updateTodoWithoutPersistence} from './actions';

import {createStore} from 'redux';
import reducer from "./reducer";

const updateTodo = updateTodoWithoutPersistence;
const addTodo = addTodoWithoutPersistence;

const getStoreWithTodos = () => {
    const store = createStore(reducer);

    store.dispatch(addTodo({id: 1, text: "Write the tests", complete: false}));
    store.dispatch(addTodo({id: 2, text: "Run the tests", complete: false}));

    return store;
}

test('can add todos', () => {
    const store = getStoreWithTodos();
    expect(store.getState().todos).toEqual([
        {
            id: 1,
            text: "Write the tests",
            complete: false
        }, {
            id: 2,
            text: "Run the tests",
            complete: false
        }
    ])
})


test('can update todos', () => {
    const store = getStoreWithTodos();
    store.dispatch(updateTodo({id: 2, complete: true}))
    expect(store.getState().todos).toContainEqual({
        id: 2, text: "Run the tests", complete: true
    })
})

test('will not update nonexistent todo', () => {
    const store = getStoreWithTodos();
    const prevState = store.getState();
    store.dispatch(updateTodo({id: 3, complete: true}));
    expect(store.getState()).toEqual(prevState);
})

test('can clear complete todos', () => {
    const store = getStoreWithTodos();
    store.dispatch(updateTodo({id: 2, complete: true}))
    
    store.dispatch(clearCompleteTodos())
    expect(store.getState().todos).toHaveLength(1);
    expect(store.getState().todos.map(todo => todo.id)).toContain(1);
    expect(store.getState().todos.map(todo => todo.id)).not.toContain(2);
})

test('can load todos in bulk', () => {
    const store = createStore(reducer);

    store.dispatch(setTodos([
        {id: 3, text: "A", complete: false},
        {id: 7, text: "B", complete: false}
    ]))

    expect(store.getState().todos).toHaveLength(2);
    expect(store.getState().nextId).toBe(8);
})
