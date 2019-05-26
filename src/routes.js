import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Suppliers from "./containers/Main/Suppliers/Suppliers";
import Contracts from './containers/Main/Contracts/Contracts'

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/fornitori" render={props => <Suppliers {...props} />} />
      <Route path="/lotti" render={props => <Contracts {...props} />} />
    </Switch>
  </div>
);

export default BaseRouter;
