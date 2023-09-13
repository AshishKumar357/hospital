import React from "react";
import Billing from "./screens/Billing";
import About from "./screens/About";
import BillwiseSummary from "./screens/BillwiseSummary";
import DaywiseSummary from "./screens/DaywiseSummary";
import ModifyBill from "./screens/ModifyBill";
import StockStatus from "./screens/StockStatus";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home-screen">
      <div className="component-container">
        <Link to="/">Homepage</Link>
        <Link to="/Billing">Billing</Link>
        <Link to="/BillwiseSummary">BillwiseSummary</Link>
        <Link to="/DaywiseSummary">DaywiseSummary</Link>
        <Link to="/ModifyBill">ModifyBill</Link>
        <Link to="/StockStatus">StockStatus</Link>
        <Link to="/About">About</Link>
      </div>
    </div>
  );
};

export default Homepage;
