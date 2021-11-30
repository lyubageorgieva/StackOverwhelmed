import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Feed from './components/layout/Feed'; 
import indexFeatures from './components/layout/indexFeatures';
import Question from './components/layout/Question';
import Alert from './components/layout/Alert'; 
import Account from './components/account/Account'; 
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';

import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


//REDUX imports
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if(localStorage.token) {
    setAuthToken(localStorage.token);
}



const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  

  return (
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
          <div className="container">
            <Alert/>
          </div>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/question" component={Question} />
            <PrivateRoute exact path="/account" component={Account} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
