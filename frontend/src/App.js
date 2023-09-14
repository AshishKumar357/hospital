import React from "react";
import Billing from "./screens/Billing";
import About from "./screens/AboutPage/About";
import BillwiseSummary from "./screens/BillwiseSummary";
import DaywiseSummary from "./screens/DayWiseSumPage/DaywiseSummary";
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
        {/* <div>hi</div> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/billwiseSummary" element={<BillwiseSummary />} />
          <Route path="/modifyBill" element={<ModifyBill />} />
          <Route path="/daywiseSummary" element={<DaywiseSummary />} />
          <Route path="/stockStatus" element={<StockStatus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
