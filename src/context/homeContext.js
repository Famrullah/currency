import React, { createContext } from 'react';
import useHomeState from '../hooks/home/useHomeState';
import { obj } from '../utils/helper';

export const HomeContext = createContext();

export function HomeProvider(props) {
  const homeStore = useHomeState(obj);
  return (
    <HomeContext.Provider value={homeStore}>
      {props.children}
    </HomeContext.Provider>
  );
}
