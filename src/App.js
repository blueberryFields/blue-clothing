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
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
        // not 100% sure if this 'else' is correct,
        // they dont do it in the course
      } else {
        setState({ currentUser: userAuth });
      }

      return function unsubscribe() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
