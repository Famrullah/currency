import React, { useEffect, useState } from 'react';
import { Store } from '../../store/reducers/homeReducers';
import { fetchDataAction } from '../../store/action/homeAction';
import InputOptionCurrency from '../../components/inputCurrency/inputCurrency';
import ListCurrency from '../../components/listCurrency/listCurrency';

const Home = () => {
  const { state, dispatch } = React.useContext(Store);
  const [selectedOption, setSelectedOption] = useState([]);
  useEffect(() => {
    fetchDataAction(dispatch);
  }, [dispatch]);

  const props = {
    rates: state.rate_list,
    option_rates: state,
    selected: selectedOption
  };

  const handleInputChange = e => {
    setSelectedOption(e);
  };

  return (
    <React.Fragment>
      <div className="episode-layout">
        <InputOptionCurrency
          {...props.option_rates}
          onChange={e => handleInputChange(e)}
        />
        <ListCurrency {...props} />
      </div>
    </React.Fragment>
  );
};

export default Home;
