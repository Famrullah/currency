import React from 'react';
import Home from '../../pages/home/home';
import { optionCurrency } from '../../helper/helper';

export const Store = React.createContext();

const initialState = {
  rate_list: [],
  option_rates: optionCurrency
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, rate_list: action.payload };
    default:
      return state;
  }
}

export function StoreProvider() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      <Home />
    </Store.Provider>
  );
}
