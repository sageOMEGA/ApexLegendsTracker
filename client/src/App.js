import React, { Fragment } from "react";
import "./App.css";
import Navigaton from "./components/layouts/Navigaton";
import Home from "./components/pages/Home";
import Gamer from "./components/gamers/Gamer";
import NotFound from "./components/pages/NotFound";
import ApexState from "./components/context/ApexState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ApexState>
      <Router>
        <Navigaton />
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:platform/:gamerId" component={Gamer} />
            <Route component={NotFound} status={404} />
          </Switch>
        </Fragment>
      </Router>
    </ApexState>
  );
};

export default App;
