import axios from 'axios';

const API_URL = 'https://api.exchangeratesapi.io/latest?base=USD';

export const fetchDataAction = async dispatch => {
  const request = await axios.get(API_URL);
  const response = request.data;
  return dispatch({
    type: 'FETCH_DATA',
    payload: response
  });
};
