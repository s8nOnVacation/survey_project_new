import React from "react";
import "./App.css";
import DashboardHome from "./dashboard/DashboardHome";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Nam from "./forms/Name";
import NewViewEditForm from "./forms/NewViewEditForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={DashboardHome} />

          <Route path='/form/' exact component={NewViewEditForm} />
          <Redirect from="/form/" to="/"></Redirect>
          {/* <Route path='/' exact component={Login} /> */}
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
