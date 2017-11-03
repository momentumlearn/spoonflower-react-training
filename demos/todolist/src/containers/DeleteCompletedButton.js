import Button from "../components/Button";
import {clearCompleteTodos} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    const numComplete = state.todos.filter(todo => todo.complete).length
    return {
        classNames: ['button-danger'],
        text: `Delete ${numComplete} completed ${numComplete === 1 ? 'todo' : 'todos'}`
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (event) => dispatch(clearCompleteTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
