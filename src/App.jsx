import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Detial from "./pages/Detial";
import Home from "./pages/Home/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`/:country`} exact>
          <Detial />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
