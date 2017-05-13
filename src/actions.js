import { SET_SEARCH_TERM } from './constants';

const setSearchTerm = (text) => ({
    type: SET_SEARCH_TERM,
    payload: text,
});

export setSearchTerm;