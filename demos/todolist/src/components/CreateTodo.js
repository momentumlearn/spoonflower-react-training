import React, {Component} from "react";

import PropTypes from 'prop-types';

class CreateTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    onCreateEvent(event) {
        event.preventDefault();
        this.props.onCreate(this.state.text);
    }

    render() {
        return (
            <div className="CreateTodo">
                <form onSubmit={event => this.onCreateEvent(event)}>
                    <input type="text" value={this.state.text} onChange={event => this.setState({text: event.target.value})} />
                </form>
            </div>
        )
    }
}

CreateTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default CreateTodo;
