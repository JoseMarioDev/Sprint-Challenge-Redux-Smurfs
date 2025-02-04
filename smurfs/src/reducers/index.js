/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADDING_SMURF,
  SMURF_ADDED,
  ADD_SMURF_ERROR,
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload],
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };

    case SMURF_ADDED:
      return { ...state, smurfs: [...action.payload] };

    default:
      return state;
  }
};

export default smurfReducer;
