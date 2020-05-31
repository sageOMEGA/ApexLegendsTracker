import React, { Fragment } from "react";
import Home from "./components/pages/Home";
import Gamer from "./components/gamers/Gamer";
import ApexState from "./components/context/ApexState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ApexState>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:platform/:gamerId" component={Gamer} />
          </Switch>
        </Fragment>
      </Router>
    </ApexState>
  );
};

export default App;
