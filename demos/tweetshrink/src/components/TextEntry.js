import React, {Component} from "react";

class TextEntry extends Component {
    render() {
        const { text, shrunkText, updateText } = this.props;
        return (
            <div className="TextEntry">
                <div className="row">
                    <div className="col">
                        <textarea
                            className="TextEntry-textbox"
                            placeholder="What do you want to shrink?"
                            onChange={event => updateText(event)}
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
