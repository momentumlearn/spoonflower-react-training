import React, { Component } from "react";

import PropTypes from 'prop-types';

class NewsSources extends Component {
    render() {
        const { sources, selected, onCheckSource } = this.props;
        return (
            <div className="NewsSources row">
                <div className="buttons col-12">
                    <span style={{marginRight: '0.5rem'}}>
                    <button onClick={event => this.props.onSelectAll()}>Select all</button>
                    </span>
                    <button onClick={event => this.props.onDeselectAll()}>Deselect all</button>
                </div>
                {sources.map(source => (
                    <div key={source.id} className="source col-4">
                        <label>
                            <input type="checkbox"
                                onChange={event => onCheckSource(source.id, event.target.checked)} 
                                checked={selected.includes(source.id)} />
                            {` ${source.name}`}
                        </label>
                    </div>
                ))}
            </div>
        )
    }
}

NewsSources.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    selected: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCheckSource: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
}

export default NewsSources;
