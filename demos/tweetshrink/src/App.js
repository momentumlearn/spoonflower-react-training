import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';
import Options from "./components/Options";
import TextEntry from "./components/TextEntry";
import textOptions from "./textOptions";

// Sample entry: 
// I like to eat bananas, apples, and grapes with breakfast because I like fruit.

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            options: []
        }
    }

    updateText(event) {
        this.setState({text: event.target.value});
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

    shrinkText() {
        let {text, options} = this.state;

        if (!text) {
            return "";
        }

        let opObj;
        options.forEach(option => {
            opObj = textOptions.find(o => o.id === option)
            if (opObj) {
                text = opObj.fn(text)
            }
        })

        return text;
    }

    render() {
        return (
            <div className="App container">
                <h1>TweetShrink</h1>
                <TextEntry text={this.state.text} 
                           shrunkText={this.shrinkText()}
                           updateText={this.updateText.bind(this)} />
                <Options checkedOptions={this.state.options}
                         setOption={this.setOption.bind(this)} />
            </div>
        );
    }
}

export default App;
