import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  </Router>
);

export default App;
