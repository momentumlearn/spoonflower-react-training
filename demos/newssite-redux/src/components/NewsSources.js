import React, {Component} from "react";
import PropTypes from 'prop-types';

class NewsSources extends Component {
    render() {
        const {sources, onCheck} = this.props;
        const loading = !sources;

        if (loading) {
            return (
                <div style={{
                    textAlign: 'center'
                }}>
                    <span className="loader loader-xl"></span>
                </div>
            )
        }

        return (
            <div className="NewsSources">
                <div className="row">
                {sources.map((source, idx) => (
                    <div className="source col-4" key={idx}>
                        <input
                            type="checkbox"
                            checked={source.active}
                            onChange={event => onCheck(source.id, event.target.checked)}/> {` ${source.name} `}
                        <a target="_blank" href={source.url}>&#x2197;</a>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

NewsSources.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        active: PropTypes.boolean
    })),
    onCheck: PropTypes.func.isRequired
}

export default NewsSources;
