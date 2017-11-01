import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';
import textOptions from './textOptions';

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
        const text = this.state.text;
        const shrunkText = this.shrinkText();
        return (
            <div className="App container">
                <h1>TweetShrink</h1>
                <div className="row">
                    <div className="col">
                        <textarea
                            className="TextEntry-textbox"
                            placeholder="What do you want to shrink?"
                            onChange={event => this.updateText(event)}
                            value={text} />
                    </div>
                    <div className="col">
                        <div className="TextEntry-shrunk-text">
                            {shrunkText}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {text && `${text.length} characters`}
                    </div>
                    <div className="col">
                        {shrunkText && `${shrunkText.length} characters`}
                    </div>
                </div>
                <div className="row options">
                    <div className="col-12">
                        <h4>Options</h4>
                    </div>
                    {textOptions.map((option, idx) => (
                        <div key={idx} className="col-6">
                            <label htmlFor={option.id}>
                                <input type="checkbox" id={option.id} onChange={this.setOption(option.id)}/> 
                                {" " + option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
