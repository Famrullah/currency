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
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    fetchDataAction(dispatch);
  }, [dispatch]);

  const props = {
    state,
    selected: selectedOption,
    propsAmmount: ammount,
    propsCurrencyList: currencyList
  };

  const ammountHandler = e => {
    setAmmountValue(e.target.value);
  };

  const handleInputChange = e => {
    setSelectedOption(e);
  };

  const disableOptions = () => {
    const selected = props.selected.value;
    const { option_rates } = props.state;
    const disable = option_rates.find(item => item.value === selected);
    disable.isDisabled = true;
    setSelectedOption(null);
  };

  const addCurrencyList = () => {
    if (props.selected) {
      const arr = [];
      const selected = props.selected;
      const { rate_list } = state;
      const obj = {
        currencyName: selected.detail,
        currencyValue: selected.value,
        rate: rate_list.rates[selected.value]
      };
      arr.push(obj);
      setCurrencyList([...currencyList, ...arr]);
      disableOptions();
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="home-layout">
        <BaseCurrency {...props} ammount={e => ammountHandler(e)} />
        <ListCurrency {...props} />
        <InputOptionCurrency
          {...props}
          onChange={e => handleInputChange(e)}
          disableOptions={e => disableOptions(e)}
          addCurrencyList={e => addCurrencyList(e)}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
