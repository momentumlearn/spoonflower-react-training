import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment() {
        console.log("increment");
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div className="App">
                <div>{count}</div>
                <button onClick={() => this.increment()}>Click me to increment number to {count + 1}!</button>
            </div>
        );
    }
}

export default App;
