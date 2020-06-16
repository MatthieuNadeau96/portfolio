import React from 'react';

import { Header } from './components/Header';
import Apps from './components/Apps';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';


function App() {

  return (
    <HashRouter basename='/'>
      <div className="App">
        <div className='everything'>

          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/apps' component={Apps} />
        </div>
        <div className='goof'>
          <span>Hey that's too small.</span>
        </div>
      </div >
    </HashRouter>
  );
}

export default App;
