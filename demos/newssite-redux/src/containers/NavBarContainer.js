import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import NavBar from "../components/NavBar";

const mapStateToProps = state => {
    return {
        sources: state.sources
    }
}

export default withRouter(connect(mapStateToProps)(NavBar));

