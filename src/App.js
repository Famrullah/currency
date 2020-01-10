import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
