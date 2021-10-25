import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
// import Alert from './components/layout/Alert'; //previous alert possition for SignUp.js

//REDUX imports
import { Provider } from 'react-redux';
import store from './store';

import './App.css';


const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <section className="container">
          {/* <Alert /> //previous alert possition for SignUp.js */}

          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
