import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


const App = () => {
  const [state, setState] = useState({ currentUser: null });

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // setState({ currentUser: user });
      createUserProfileDocument(user);

      console.log(user);

      return function unsubscribe() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
