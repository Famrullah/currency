import React from 'react';
import Select from 'react-select';
import './_inputCurrency.scss';

export default function InputCurrency(props) {
  const { state, selected } = props;
  return (
    <div className="input-currency-page">
      <Select
        options={state.option_rates}
        onChange={props.onChange}
        value={selected}
      />
      <div className="add-form">
        <button className="btn-add__currency" onClick={props.disableOptions}>
          Submit
        </button>
        <div className="clear"></div>
      </div>
    </div>
  );
}
