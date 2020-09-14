import React from 'react';
import './App.css';
import Header from "./Header";
import Home from  "./Home" ;
import Checkout from './Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
            {/* <h1>
              This is the checkout page
            </h1> */}
          </Route>

          <Route path="/login">
            <Header/>
            <h1>
              This is the login page
            </h1>
          </Route>

          <Route path="/">
            
            <Header/>
            <Home />

           
          </Route>

        </Switch>
      </div>

    </Router>

  );
}

export default App;
