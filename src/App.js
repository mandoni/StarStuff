import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import News from './Components/News/News';
import Noticia from './Components/News/Noticia';

import './App.css'

function App() {
  
  return (
    <Router>
      <div>
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
          <Route path= "/news">
            <News />
          </Route>
          <Route path= "/login">
            <div className="mini-nav">
              <Link to="/home">
                <button type="button" className="btn-close">X</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn-routing">Registro</button>
              </Link>
            </div> 
            <Login />
          </Route>
          <Route path= "/signup">
              <div className="mini-nav">
                <Link to="/home">
                  <button type="button" className="btn-close">X</button>
                </Link>
              </div> 
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
