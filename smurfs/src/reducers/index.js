import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return { ...state, fetchingSmurfs: true, error: null };
    case FETCH_SMURF_SUCCESS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case FETCH_SMURF_ERROR:
      return { ...state, fetchingSmurfs: false, error: 'error, try again' };
    default:
      return state;
  }
};

export default smurfsReducer;
