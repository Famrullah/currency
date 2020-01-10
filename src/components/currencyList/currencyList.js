import React, { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';

const List = () => {
  const data = useContext(HomeContext);
  console.log(data);
  return <div>l</div>;
};

export default List;
