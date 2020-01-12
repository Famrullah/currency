import React from 'react';

import './_listCurrency.scss';

const ListCurrency = props => {
  const { propsCurrencyList } = props;
  console.log(props);
  return (
    <div className="list-currency-page">
      {propsCurrencyList.map(item => (
        <div className="grid-2 container-list">
          <div className="left">
            <h5>{item.currencyValue}</h5>
            <p className="italic">
              {item.currencyValue} - {item.currencyName}
            </p>
            <p>
              <p>
                1 USD = {item.currencyValue} {item.rate.toFixed(2)}
              </p>
            </p>
          </div>
          <div className="right">{item.currencyName}</div>
        </div>
      ))}
    </div>
  );
};

export default ListCurrency;
