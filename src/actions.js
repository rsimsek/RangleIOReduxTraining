import { SET_SEARCH_TERM } from './constants';

export const setSearchTerm = (text) => ({
    type: SET_SEARCH_TERM,
    payload: text,
});
