import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import login from "./Pages/login";


function App() {
  return (
   
      <Switch>
        <Route exact path="/">
          DashBoard
          {/* Send to dashboard */}
        </Route>
        <Route exact path="/login" component={login}/>
        <Route path="*" render={()=>"404 Not Found!"}/>
      </Switch>
    
  );
}

export default App;
