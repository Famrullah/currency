import React from 'react';
import './_baseCurrency.scss';

const BaseCurrency = props => {
  //   console.log(props);
  return (
    <div className="input-container">
      <div className="currency">
        <h5>USD</h5>
      </div>
      <input
        type="number"
        min="1"
        onChange={props.ammount}
        value={props.propsAmmount}
      />
    </div>
  );
};

export default BaseCurrency;
