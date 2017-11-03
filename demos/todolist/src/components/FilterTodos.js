import React, {Component} from "react";

import PropTypes from 'prop-types';

class FilterTodos extends Component {
    render() {
        const {filterOptions, currentFilter, onChangeFilter} = this.props;

        return (
            <div className="FilterTodos">
                {filterOptions.map((filter, idx) => (
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value={filter.value}
                            onChange={event => onChangeFilter(event.target.value)}
                            checked={filter.value === currentFilter}/> {" "}{filter.label}
                    </label>
                ))}
            </div>
        )
    }
}

FilterTodos.defaultProps = {
    filterOptions: [
        {
            value: 'all',
            label: "Show all"
        }, {
            value: 'complete',
            label: 'Show completed'
        }, {
            value: 'incomplete',
            label: 'Show incomplete'
        }
    ]
}

FilterTodos.propTypes = {
    filterOptions: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string.isRequired, label: PropTypes.string.isRequired})).isRequired,
    currentFilter: PropTypes.string,
    onChangeFilter: PropTypes.func
}

export default FilterTodos;
