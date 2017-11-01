import React, {Component} from "react";
import textOptions from "../textOptions";

class TextEntry extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    updateText(event) {
        this.setState({text: event.target.value});
    }

    shrinkText() {
        let {text} = this.state;
        const {options} = this.props;

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
        const { text } = this.state;
        const shrunkText = this.shrinkText();

        return (
            <div className="TextEntry">
                <div className="row">
                    <div className="col">
                        <textarea
                            className="TextEntry-textbox"
                            placeholder="What do you want to shrink?"
                            onChange={event => this.updateText(event)}
                            value={text}/>
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
            </div>
        );
    }
}

export default TextEntry;
