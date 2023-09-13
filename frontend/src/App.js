import React from "react";
import Billing from "./screens/Billing";
import About from "./screens/AboutPage/About";
import BillwiseSummary from "./screens/BillwiseSummary";
import DaywiseSummary from "./screens/DaywiseSummary";
import ModifyBill from "./screens/ModifyBill";
import StockStatus from "./screens/StockStatus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/*<LandingPage />
        <About /> */}
        <Routes>
          <Route exact path="/" component={<LandingPage />} />
          <Route path="/Billing" component={<Billing />} />
          <Route path="/BillwiseSummary" component={<BillwiseSummary />} />
          <Route path="/ModifyBill" component={<ModifyBill />} />
          <Route path="/DaywiseSummary" component={<DaywiseSummary />} />
          <Route path="/StockStatus" component={<StockStatus />} />
          <Route path="/About" component={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
