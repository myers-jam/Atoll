import React from 'react';
import './App.css';
// Pages
// import CreateStore from './pages/CreateStore';
import LandingPage from './pages/LandingPage';


import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      {/* <Navigationbar /> */}
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
