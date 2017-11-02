import React, {Component} from "react";

import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

class NavBar extends Component {
    render() {
        if (!this.props.sources) {
            return <div></div>;
        }
        return (
            <div className="NavBar bg-primary">
                <ul>
                    <li>
                        <NavLink to="/sources">Sources</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">Stories</NavLink>
                    </li>
                    <Route
                        path="/stories/:sourceId"
                        render={({match}) => {
                        const source = this
                            .props
                            .sources
                            .find(source => source.id === match.params.sourceId);
                        return (
                            <li>
                                <NavLink to={`/stories/${match.params.sourceId}`}>
                                    {source.name}
                                </NavLink>
                            </li>
                        )
                    }}/>
                </ul>
            </div>
        );
    }
}

NavBar.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired}))
}

export default NavBar;
