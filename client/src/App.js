import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Feed from './components/layout/Feed'; 
import indexFeatures from './components/layout/indexFeatures';
import Question from './components/layout/Question';
import Alert from './components/layout/Alert'; 

import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';



//REDUX imports
import { Provider } from 'react-redux';
import store from './store';

import './App.css';



const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>

        <Switch>
          <Route exact path="/" component={Feed} />
        </Switch>
        
        <Switch>
          <Route exact path="/" component={indexFeatures} />
        </Switch>
        
        <section className="container">
          <Alert /> 
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/question" component={Question} />
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
