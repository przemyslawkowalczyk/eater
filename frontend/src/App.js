import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyAccount from './MyAccount';
import EaterNavBar from  './Navbar';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import Restaurant from './Restaurant';
import RestaurantDetails from './RestaurantDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <EaterNavBar />
        <Container>
          <Switch>
            <Route path="/my-account" component={MyAccount}/>
            <Route exact path="/restaurant/" component={Restaurant}/>
            <Route path="/restaurant/:id" component={RestaurantDetails}/>
            <Route path="/my-account" component={MyAccount}/>
            <Route path="/" exact>
              <p>Welcome, in eater let's open restaurant list above.</p>
            </Route>
            <Route render={() => <h2>Sorry, page not found.</h2>}/>
          </Switch>
        </Container>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
