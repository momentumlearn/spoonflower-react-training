import React, { Component } from "react";
import PropTypes from 'prop-types';

class Option extends Component {
    render() {
        const {id, label, checked, onChange} = this.props;
        return (
            <div className="Option">
                <label htmlFor={id}>
                    <input type="checkbox" id={id} onChange={onChange} checked={checked}/> {" " + label}
                </label>
            </div>
        )
    }
}

Option.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default Option;
