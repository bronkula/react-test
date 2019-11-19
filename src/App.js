import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { createHashHistory } from "history";

import Header from "./parts/header";
import MainPage from "./pages";
import LearnPage from "./pages/learn";


const hashHistory = createHashHistory();

function App() {
   return (
      <Router history={hashHistory}>
         <Header title="Learning React">
            <Link to="/">Home</Link>
            <Link to="/learn">Learn React</Link>
         </Header>

         <div className="container">
            <Switch>
               <Route exact path="/" component={MainPage} />
               <Route path="/learn" component={LearnPage} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;