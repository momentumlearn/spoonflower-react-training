import React, { Component } from "react";

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

export default Option;
