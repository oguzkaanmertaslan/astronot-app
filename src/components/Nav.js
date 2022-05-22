import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};
export default Nav;
