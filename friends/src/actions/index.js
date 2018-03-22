import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ADDERROR = 'ADDERROR';

export const getFriends = () => (dispatch) => {

    dispatch({ type: FETCHING });

    axios.get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Error fetching the friends' });
    })
}

export const addFriends = () => (dispatch) => {

    dispatch({ type: ADDING });

    axios.post('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({ type: ADDED, friends: response.data });
    })
    .catch(err => {
        dispatch({ type: ADDERROR, errorMessage: 'Error adding the friends' });
    })
}