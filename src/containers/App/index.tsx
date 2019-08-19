import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import Header from "../../components/Header";
import Home from "../../containers/Home";
import DetailedPage from "../../containers/DetailedPage";

import "./style.scss";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filme/:id" component={DetailedPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
