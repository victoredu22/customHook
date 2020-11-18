import React from 'react'
import { NavBar } from './NavBar';
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={ HomeScreen }/>
          <Route exact path="/about" component={ AboutScreen }/>
          <Route exact path="/login" component={ LoginScreen }/>

          <Route component={ HomeScreen }/>
        </Switch>
        </div>
      </div>
    </Router>
  )
}
