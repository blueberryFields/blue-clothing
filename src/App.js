import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Hats = () => (
  <div>YOYOYO HATS MAN</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
