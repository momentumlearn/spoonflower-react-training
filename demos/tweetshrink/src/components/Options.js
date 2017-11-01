import React, {Component} from "react";
import textOptions from '../textOptions';

const Options = ({checkedOptions, setOption}) => {
    return (
        <div className="Options">
            <h4>Options</h4>
            <div className="row">
                {textOptions.map((option, idx) => {
                    return <div key={idx} className="col-6">
                        <label htmlFor={option.id}>
                            <input
                                type="checkbox"
                                id={option.id}
                                onChange={setOption(option.id)}
                                checked={checkedOptions.indexOf(option.id) !== -1}/> {" " + option.label}
                        </label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Options;
