import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Detail/Index';
import Favorites from './components/Favorites/Index';
import NavBar from './components/NavBar/Index';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home remove='no-remove' add='add'/>
        </Route>
        <Route strict path='/favorites'>
          <Favorites remove='remove' add='no-remove'/>
        </Route>
        <Route strict path='/detail/:id'>
          <Detail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
