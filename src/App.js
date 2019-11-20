import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from "./parts/header";
import MainPage from "./pages";
import LearnPage from "./pages/learn";

function App() {
   return (
      <Router>
         <Header title="Learning React">
            <Link to="/">Home</Link>
            <Link to="/learn">Learn React</Link>
         </Header>

         <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/learn" component={LearnPage} />
         </Switch>
      </Router>
   );
}

export default App;