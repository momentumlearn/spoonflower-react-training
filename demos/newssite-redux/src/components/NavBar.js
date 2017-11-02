import React, {Component} from "react";
import {Route, NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

class NavBar extends Component {
    render() {
        const {sources} = this.props;

        return (
            <div className="NavBar bg-primary">
                <ul>
                    <li>
                        <NavLink exact to="/">All Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sources">Sources</NavLink>
                    </li>
                    <Route
                        path="/stories/:sourceId"
                        render={({match}) => {
                        if (sources) {
                            let source = sources.find(source => source.id === match.params.sourceId);
                            return (source &&
                                <li>
                                    <NavLink to={`/stories/${source.id}`}>
                                        {source.name}
                                    </NavLink>
                                </li>
                            );
                        } else {
                            return null;
                        }
                    }}/>
                </ul>
            </div>
        )
    }
}

NavBar.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }))
}

export default NavBar;
