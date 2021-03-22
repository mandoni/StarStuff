import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Actions/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/authActions.js";


import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import News from './Components/News/News';
import Nota from "./Components/News/Noticia";
import PostMessages from "./Components/CRUD/postDocument";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard/dashboard";

import './App.css'
import Footer from './Components/Home/Footer';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="body">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>  sads
          <Route path="/home">
              <Home />
            </Route>
            <Route path="/news/:id" exact>
              <Nota />
              <Footer />
            </Route>

            <Route path="/login">
              <div className="mini-nav">
                <Link to="/home">
                  <button type="button" className="btn-close">X</button>
                </Link>
                <div className="btn-regis-div">
                  <Link to="/signup">
                    <button type="button" className="btn-routing">Registro</button>
                  </Link>
                </div>
              </div>
              <Login />
            </Route>
            <Route path="/signup">
              <div className="mini-nav">
                <Link to="/home">
                  <button type="button" className="btn-close">X</button>
                </Link>
              </div>
              <Signup />
            </Route>

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Footer/>

              <Route path="/addNews">

                <PostMessages />

                <Footer />
              </Route>

              <Route path="/secciones">
                <News />
                <Footer />
              </Route>

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
