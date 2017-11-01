import React, {Component} from "react";
import shrinkText from "../shrinkText";
import PropTypes from 'prop-types';

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

    render() {
        const { text } = this.state;
        const { options } = this.props;

        const shrunkText = shrinkText(text, options);

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

TextEntry.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TextEntry;
