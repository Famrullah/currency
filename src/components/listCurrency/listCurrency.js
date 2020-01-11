import React, { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';

import './_listCurrency.scss';

const List = () => {
  const data = useContext(HomeContext);
  console.log(data);
  return (
    <div className="list-currency-page">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus
      iure velit corrupti maiores animi suscipit pariatur itaque eius dolore
      dignissimos, similique quia eveniet cum quo deserunt deleniti aperiam in.
    </div>
  );
};

export default List;
