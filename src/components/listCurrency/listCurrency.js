import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_listCurrency.scss';

const ListCurrency = props => {
  const { propsCurrencyList, remove, calculation } = props;
  return (
    <div className="list-currency-page">
      {propsCurrencyList.map((item, index) => (
        <div className="grid-2 container-list" key={index}>
          <div className="left">
            <h5>{item.currencyValue}</h5>
            <p className="italic">
              {item.currencyValue} - {item.currencyName}
            </p>
            <p>
              1 USD = {item.currencyValue} {item.rate.toFixed(2)}
            </p>
          </div>
          <div className="right">
            <h3>{calculation(item.currencyValue)}</h3>
            <span className="font-trash">
              <FontAwesomeIcon
                icon="trash-alt"
                onClick={() => remove(item.currencyValue)}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
// calc(item.currencyValue)
export default ListCurrency;
