import Option from "./Option";
import PropTypes from 'prop-types';
import React from "react";
import {textOptions} from '../shrinkText';

const Options = ({checkedOptions, setOption}) => {
    return (
        <div className="Options">
            <h4>Options</h4>
            <div className="row">
                {textOptions.map((option, idx) => {
                    return <div key={idx} className="col-6">
                        <Option
                            id={option.id}
                            label={option.label}
                            checked={checkedOptions.indexOf(option.id) !== -1}
                            onChange={setOption(option.id)}/>
                    </div>
                })}
            </div>
        </div>
    )
}

Options.propTypes = {
    setOption: PropTypes.func.isRequired,
    checkedOptions: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Options;
