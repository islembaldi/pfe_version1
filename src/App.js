import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./components/accueil/Accueil";
import Login from "./components/accueil/login/Login";
import Inscription from "./components/accueil/inscription/Inscription";
import contact from "./components/accueil/contact/contact";
import CustomNavbar from "./components/accueil/CustomNavbar/CustomNavbar";
function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/login" component={Login} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/contact" component={contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
