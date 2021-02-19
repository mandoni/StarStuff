import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="nav">
        <Navbar />
      </div>
      <div className="body">
        <Switch>
          <Route path= "/" exact>
            <Home />
          </Route>
          <Route path= "/home">
            <Home />
          </Route>
          <Route path= "/login">
            <Login />
          </Route>
          <Route path= "/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
