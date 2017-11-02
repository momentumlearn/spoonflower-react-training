import 'shoelace-css/dist/shoelace.css';
import './App.css';

import React, {Component} from 'react';

import CreateTodoContainer from "./containers/CreateTodoContainer";
import TodoListContainer from "./containers/TodoListContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <CreateTodoContainer/>
                    <TodoListContainer/>
                </div>
            </div>
        );
    }
}

export default App;
