import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (<div className="NavBar bg-primary">
            <ul className="horizontal-list">
                <li><NavLink exact to="/">Stories</NavLink></li>
                <li><NavLink to="/sources/">Sources</NavLink></li>
            </ul>
        </div>)
    }
}

export default NavBar;
