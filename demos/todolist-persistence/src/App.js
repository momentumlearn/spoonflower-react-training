import 'shoelace-css/dist/shoelace.css';
import './App.css';

import React, {Component} from 'react';

import CreateTodoContainer from "./containers/CreateTodoContainer";
import DeleteCompletedButton from './containers/DeleteCompletedButton';
import FilterTodosContainer from './containers/FilterTodosContainer';
import TodoListContainer from "./containers/TodoListContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <CreateTodoContainer/>
                    <div className="row" style={{marginTop: '0.5rem'}}>
                        <div className="col">
                            <FilterTodosContainer/>
                        </div>
                        <div className="col" style={{textAlign: 'right'}}>
                            <DeleteCompletedButton/>
                        </div>
                    </div>
                    <TodoListContainer/>
                </div>
            </div>
        );
    }
}

export default App;
