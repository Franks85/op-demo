import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Suppliers from "./containers/Main/Suppliers/Suppliers";

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/suppliers" render={props => <Suppliers {...props} />} />
    </Switch>
  </div>
);

export default BaseRouter;
