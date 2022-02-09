import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { LoadToken } from './store/actions/UserAction';

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
    
  }

  return (
    <div>
      {props.userState.isLoggedIn === true ? 
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/profile' component={Profile} />
            <Route />
          </Switch>
        </div>
      </div>
      :
      <div>
        <Switch>
          <Route exact path='/'>
            <SignIn handleLogIn={handleLogIn} />
          </Route>
          <Route path='/sign-up'>
            <Register handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </div>
    }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
