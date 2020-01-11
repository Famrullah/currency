import React from 'react';
import Select from 'react-select';

export default function InputCurrency(props) {
  //   console.log(props);
  return (
    <div>
      <Select options={props.option_rates} onChange={props.onChange} />
    </div>
  );
}
