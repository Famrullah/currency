import React from 'react';
import { HomeProvider } from '../../context/homeContext';
import List from '../../components/currencyList/currencyList';

const Home = props => {
  return (
    <HomeProvider>
      <List />
    </HomeProvider>
  );
};

export default Home;
