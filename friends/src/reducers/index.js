import { FETCHED, FETCHING, ERROR } from '../actions';
// importing actions

// pieces of state that we need
const initialState = {
  friends: [],
  fetching: false,
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, fetching: true }
      case ERROR:
      return { ...state, error: action.errorMessage }
    case FETCHED:
      return { ...state, friends: action.friends, fetching: false, error: null } //otherwise will continue to show data
    default:
    return state;
  }
}