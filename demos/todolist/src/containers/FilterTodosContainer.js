import FilterTodos from '../components/FilterTodos';
import { changeFilter } from '../actions';
import { connect } from 'react-redux';

// pass current filter from store to the component
// pass onChangeFilter function to the component

const mapStateToProps = (state) => {
    return {
        currentFilter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (filter) => dispatch(changeFilter(filter))
    }
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
const FilterTodosContainer = connectToStore(FilterTodos);

export default FilterTodosContainer;
