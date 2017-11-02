import CreateTodo from '../components/CreateTodo';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (text) => dispatch(addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
