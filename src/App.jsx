import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Detial from "./pages/Detial";
import Home from "./pages/Home/index";
import { useCountries } from "./utils/hooks";

const App = () => {
  const { countriesData } = useCountries();

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home countriesData={countriesData} />
        </Route>
        <Route path={`/:country`} exact>
          <Detial countriesData={countriesData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
