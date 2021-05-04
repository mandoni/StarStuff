import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import { Provider } from "react-redux";
//import { store } from "./Actions/store";


import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Signup from './Components/Login/Signup';
import News from './Components/News/News';
import Nota from "./Components/News/Noticia";
import PostMessages from "./Components/CRUD/postDocument";
import './App.css'
import Footer from './Components/Home/Footer';
import Perfil from './Components/Login/perfil';
import NotFound from "./NotFound";

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
            <Signup />
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

            <PostMessages />

            <Footer />
          </Route>

          <Route path="/secciones">
            <News />
            <Footer />
          </Route>

          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/:id">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
