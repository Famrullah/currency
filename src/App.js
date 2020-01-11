import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './store/reducers/homeReducers';
import './App.scss';

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
