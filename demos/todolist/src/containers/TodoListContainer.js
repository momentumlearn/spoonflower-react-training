import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

const mapStateToProps = (state) => {
    let todos = state.todos;
    const filter = state.filter;

    if (filter === 'complete') {
        todos = todos.filter(todo => todo.complete)
    } else if (filter === 'incomplete') {
        todos = todos.filter(todo => !todo.complete)
    }

    return {
        todos: todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckTodo: (id, complete) => dispatch(updateTodo({id: id, complete: complete}))
        // onCheckTodo: (id, complete) => {
        //     return dispatch({
        //         type: 'UPDATE_TODO',
        //         payload: {id: id, complete: complete}
        //     })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
