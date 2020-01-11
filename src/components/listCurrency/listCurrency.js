import React from 'react';

import './_listCurrency.scss';

const ListCurrency = props => {
  return (
    <div className="list-currency-page">
      <button onClick={props.clearSelectedValue}>clear</button>
    </div>
  );
};

export default ListCurrency;
