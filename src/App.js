import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './store/reducers/homeReducers';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faTrashAlt);

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={StoreProvider} />
      </Router>
    </div>
  );
}

export default App;
