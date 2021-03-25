import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Actions/store";


import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import News from './Components/News/News';
import Nota from "./Components/News/Noticia";
import PostMessages from "./Components/CRUD/postDocument";
//import Secciones from "./Components/Ne"

import './App.css'
import Footer from './Components/Home/Footer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="body">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/news/:id" exact>
            <Nota />
            <Footer />
          </Route>
          <Route path="/login">
            <div className="mini-nav">
              <div className="div-exit-btn">
                <Link to="/home">
                  <button type="button" className="btn-close">X</button>
                </Link>
              </div>
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
          <Route path="/addNews">
            <Provider store={store}>
              <PostMessages />
            </Provider>
            <Footer />
          </Route>

          <Route path="/secciones">
            <News />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
