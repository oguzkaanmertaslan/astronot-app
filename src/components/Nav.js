import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
const Nav = () => {
  return (
    <div className="page-area">
      <Router>
        <nav>
          <Link to="/login" />
        </nav>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default Nav;
