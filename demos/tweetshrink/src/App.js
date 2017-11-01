import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';
import Options from "./components/Options";
import TextEntry from "./components/TextEntry";

// Sample entry: 
// I like to eat bananas, apples, and grapes with breakfast because I like fruit.

class App extends Component {
    constructor() {
        super();
        this.state = {
            options: []
        }
    }

    setOption(option) {
        return (event) => {
            const value = event.target.checked;
            const optionSet = new Set(this.state.options);
            if (value) {
                optionSet.add(option);
            } else {
                optionSet.delete(option);
            }
            this.setState({
                options: [...optionSet]
            })
        }
    }

    render() {
        return (
            <div className="App container">
                <h1>TweetShrink</h1>
                <TextEntry options={this.state.options} />
                <Options checkedOptions={this.state.options}
                         setOption={this.setOption.bind(this)} />
            </div>
        );
    }
}

export default App;
