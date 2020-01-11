import React from 'react';
import Select from 'react-select';
import './_inputCurrency.scss';

export default function InputCurrency(props) {
  const { option_rates, selected } = props;
  return (
    <div className="input-currency-page">
      <Select
        options={option_rates.option_rates}
        onChange={props.onChange}
        value={selected}
      />
    </div>
  );
}
