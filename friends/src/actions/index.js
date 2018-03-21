import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

// Thunk is passing dispatch to this function
// function getData() {
//     return function (dispatch) {

//     }
// }
// These are the actions we are dispatching

// functions using THUNK
// Action creators
//Thunkified version of Action Creators 
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => (dispatch) => {

    dispatch({ type: FETCHING });

    axios.get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    })
}