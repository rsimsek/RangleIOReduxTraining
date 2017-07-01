import { 
    SET_SEARCH_TERM,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_ERROR 
} from './constants';
import { apiCall } from "./api/api";

export const setSearchTerm = (text) => ({
    type: SET_SEARCH_TERM,
    payload: text,
});

export const requestRobots = (dispatch) => {
    //dispatch a pending action
    dispatch({type: REQUEST_ROBOTS_PENDING});
    //fire the API request 
    apiCall("https://jsonplaceholder.typicode.com/users")
        //upon success fire a success action
        .then(response => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: response}))
        //on error we dispatch an error event
        .catch(error => dispatch({type: REQUEST_ROBOTS_ERROR, payload: error}));
}