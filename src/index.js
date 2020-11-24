import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import APCPage from "views/APCPage/APCPage.js";
import IntroPage from "views/IntroPage/IntroPage.js";
import ProjectsPage from "views/ProjectsPage/ProjectsPage.js";
import ProfilePage2 from "views/ProfilePage/ProfilePage2.js";
import PublicationsPage from "views/PublicationsPage/PublicationsPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/apc-page" component={APCPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/projects-page" component={ProjectsPage} />
      <Route path="/profile-page2" component={ProfilePage2} />
      <Route path="/publications-page" component={PublicationsPage} />
      <Route path="/" component={IntroPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
