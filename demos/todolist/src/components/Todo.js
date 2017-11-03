import React, {Component} from "react";

import PropTypes from 'prop-types';

class Todo extends Component {
    render() {
        const {todo, onCheck} = this.props;
        return (
            <div className="todo">
                <input type="checkbox" checked={todo.complete} onChange={event => onCheck(todo.id, event.target.checked)} />
                <span>{todo.text}</span>
            </div>
        );
    }
}

export const todoShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
});

Todo.propTypes = {
    todo: todoShape.isRequired,
    onCheck: PropTypes.func.isRequired
}

export default Todo;
