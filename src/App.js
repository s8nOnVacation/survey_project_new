import React from "react";
import "./App.css";
import logo from "./logo.png"
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import DashboardHome from "./dashboard/DashboardHome";
import NewViewEditForm from "./forms/NewViewEditForm";
import ShowResponses from "./forms/ShowResponses";

function App() {
  const headerClick = () => {
    if (!(window.location.href.includes("form") || window.location.href.includes("responses")))
      window.location.reload();
    else window.history.back();
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appHeader"><img src={logo} className="logoImage" onClick={headerClick}></img></div>
        <div>
          <Switch>
            <Route path='/' exact component={DashboardHome} />
            <Route path='/form/' exact component={NewViewEditForm} />
            <Route path='/responses/' exact component={ShowResponses} />
            {/* <Redirect from="/form/" to="/"></Redirect> */}
            {/* <Route path='/' exact component={Login} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
