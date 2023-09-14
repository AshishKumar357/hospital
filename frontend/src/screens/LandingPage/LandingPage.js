import React from "react";
import { Link } from "react-router-dom";
import billImg from "../../Images/bill.jpg";
import stockImg from "../../Images/stock.png";
import aboutImg from "../../Images/about.png";
import daySumImg from "../../Images/daySum.png";
import modiyBillImg from "../../Images/modifyBill.png";
import billSumImg from "../../Images/billSum.jpg";
import "../LandingPage/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="tile-container">
        <div className="tile">
          <Link to="/billing">
            <img src={billImg} alt="bill" />
            <p> Billing</p>
          </Link>
        </div>

        <div className="tile">
          <Link to="/billOps">
            <img src={modiyBillImg} alt="ModifybillImg" />
            <p>Bill Operations</p>
          </Link>
        </div>

        <div className="tile">
          <Link to="/billwiseSummary">
            <img src={billSumImg} alt="billWiseSummaryImg" />
            <p> Bill-Wise Summary</p>
          </Link>
        </div>
      </div>
      <div className="tile-container">
        <div className="tile">
          <Link to="/daywiseSummary">
            <img src={daySumImg} alt="dayWiseSummaryImg" />
            <p>Day-wise Summary</p>
          </Link>
        </div>

        <div className="tile">
          <Link to="/stockStatus">
            <img src={stockImg} alt="stockImg" />
            <p> Stock Status</p>
          </Link>
        </div>

        <div className="tile">
          <Link to="/about">
            <img src={aboutImg} alt="aboutImg" />
            <p>About Us</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
