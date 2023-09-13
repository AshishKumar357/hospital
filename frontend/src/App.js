import Homepage from "./Homepage";
import React from "react";
import Billing from "./screens/Billing";
import About from "./screens/About";
import BillwiseSummary from "./screens/BillwiseSummary";
import DaywiseSummary from "./screens/DaywiseSummary";
import ModifyBill from "./screens/ModifyBill";
import StockStatus from "./screens/StockStatus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Billing" component={Billing} />
        <Route path="/BillwiseSummary" component={BillwiseSummary} />
        <Route path="/ModifyBill" component={ModifyBill} />
        <Route path="/DaywiseSummary" component={DaywiseSummary} />
        <Route path="/StockStatus" component={StockStatus} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
