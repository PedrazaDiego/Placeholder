import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import Profile from './pages/Profile'


function App() {
  return (
    <div>
      <div >
        <NavBar/>
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/profile' component={Profile}/>
          <Route/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
