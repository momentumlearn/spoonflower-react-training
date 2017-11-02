import { connect } from 'react-redux';
import { toggleSource } from '../actions';
import NewsSources from "../components/NewsSources";

const mapStateToProps = state => {
    return {
        sources: state.sources
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheck: (id, active) => dispatch(toggleSource({id, active}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);
