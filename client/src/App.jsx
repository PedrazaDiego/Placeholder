import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { LoadToken } from './store/actions/UserAction';
import { RegisterUser } from './services';

import './App.css';

import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import SignIn from './components/SignIn';
import Register from './components/Register';


const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchToken: (user) => dispatch(LoadToken(user))
  }
}


const App = (props) => {

  const history = useHistory()

  const handleLogIn = (e) => {
    e.preventDefault()
    history.push('/')
    props.fetchToken({ 'email': e.target.email.value, 'password': e.target.password.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    history.push('/')
    RegisterUser({
      'email': e.target.email.value, 'password': e.target.password.value, 'user_name': e.target.username.value
    })
  }

  return (
    <div className='background'>
      {props.userState.isLoggedIn === true ?
        <div className='background'>
          <NavBar userState={props.userState} />
          <div className='landing-profile'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/profile' component={Profile} />
              <Route />
            </Switch>
          </div>
        </div>
        :
        <div className='login-body'>
          <Switch>
            <Route exact path='/'>
              <SignIn handleLogIn={handleLogIn} />
            </Route>
            <Route path='/sign-up'>
              <Register handleRegister={handleRegister} />
            </Route>
          </Switch>
        </div>
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
