import React, {Component} from "react";
import Todo, {todoShape} from './Todo';

import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onCheck={this.props.onCheckTodo}/>
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    onCheckTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(todoShape)
}

export default TodoList;
