import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

import Footer from './cmps/Footer';
import NavBar from './cmps/NavBar';

import './styles/global.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/favorites" component={Favorites} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
