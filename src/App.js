import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Top from './components/Top/Top';
import NoMatch from './components/NoMatch/NoMatch';
import Details from './components/Details/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Top/>
        </Route>
        <Route path="/Details/:postDetails">
          <Details/>
        </Route>
        <Route exact path="/">
          <Top/>
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
