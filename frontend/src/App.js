import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Restaurant from './Restaurant';
import RestaurantDetails from './RestaurantDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/restaurant/" component={Restaurant}/>
        <Route path="/restaurant/:id" component={RestaurantDetails}/>
        React app!
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
