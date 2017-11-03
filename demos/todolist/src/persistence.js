import request from 'superagent';
import { setTodos } from './actions';

export const loadTodos = (dispatch) => {
    request.get('/todos')
        .then(res => {
            dispatch(setTodos(res.body))
        })
}
