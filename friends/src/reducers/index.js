import { FETCHED, FETCHING, ERROR } from '../actions';
import { ADDED, ADDING, ADDERROR } from '../actions';

const initialState = {
  friends: [],
  fetched: false,
  fetching: false,
  error: null,
  adding: false,
  added: false,
  adderror: null,
}


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, fetching: true }
      case ERROR:
      return { ...state, error: action.errorMessage }
    case FETCHED:
      return { ...state, friends: action.friends, fetching: false, error: null } 
    case ADDING:
      return { ...state, adding: true }
    case ADDERROR:
      return { ...state, adderror: action.errorMessage }
    case ADDED:
      return { ...state, added: true }
    default:
    return state;
  }
}