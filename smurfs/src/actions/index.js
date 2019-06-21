import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

Let nextSmurfId = 0;

export const addSmurf = text => ({
  type: 'ADD_SMURF',
  id: nextSmurfId++,
  text,
})

export const getSmurfs = name => dispatch => {
  dispatch({type: FETCH_SMURF_START});
  axios
  .get('localhost:3333/smurfs')
  .then(res=> {
    console.log(res);
    dispatch({type:FETCH_SMURF_SUCCESS, payload.res.data})
  })
  .catch(err=>dispatch({type:FETCH_SMURF_ERROR}))
};