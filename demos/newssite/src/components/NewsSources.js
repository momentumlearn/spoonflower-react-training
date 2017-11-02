import React, {Component} from "react";

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

export default NewsSources;
