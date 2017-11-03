import React, { Component } from "react";

import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const { text, action, classNames } = this.props;
        classNames.push("button");
        const className = classNames.join(" ");
        return (
            <button className={className} onClick={action}>{text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string)
}

Button.defaultProps = {
    action: (event) => console.log(event.target),
    classNames: []
}

export default Button;
