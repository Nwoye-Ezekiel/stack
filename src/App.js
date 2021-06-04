import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/Home";
// import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Statistics from "./pages/Statistics";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Welcome" component={Welcome} /> */}
          <Route exact path="/About" component={About} />
          <Route exact path="/Tasks" component={Tasks} />
          <Route exact path="/Statistics" component={Statistics} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
