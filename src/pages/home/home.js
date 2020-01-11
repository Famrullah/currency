import React, { useEffect, useState, useContext } from 'react';
import { Store } from '../../store/reducers/homeReducers';
import { fetchDataAction } from '../../store/action/homeAction';
import InputOptionCurrency from '../../components/inputCurrency/inputCurrency';
import ListCurrency from '../../components/listCurrency/listCurrency';
import BaseCurrency from '../../components/baseCurrency/baseCurrency';
import Header from '../../components/header/header';

import './_home.scss';

const Home = () => {
  const { state, dispatch } = useContext(Store);
  const [selectedOption, setSelectedOption] = useState(null);
  const [ammount, setAmmountValue] = useState(1);

  useEffect(() => {
    fetchDataAction(dispatch);
  }, [dispatch]);

  const props = {
    rates: state.rate_list,
    option_rates: state,
    selected: selectedOption,
    propsAmmount: ammount
  };

  const ammountHandler = e => {
    setAmmountValue(e.target.value);
  };

  const handleInputChange = e => {
    setSelectedOption(e);
  };

  const clearSelectedValue = e => {
    setSelectedOption(null);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="home-layout">
        <BaseCurrency {...props} ammount={e => ammountHandler(e)} />
        <InputOptionCurrency {...props} onChange={e => handleInputChange(e)} />
        <ListCurrency
          {...props}
          clearSelectedValue={e => clearSelectedValue(e)}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
