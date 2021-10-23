import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';  
import './App.css';


const App = () => (
  <Router>
  <Fragment>
    <Navbar />
    <section className="container">
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </section>
    <Footer/>
  </Fragment>
  </Router>
);

export default App;
