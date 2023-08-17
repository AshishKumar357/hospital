const express = require("express");
const { registerUser } = require("../controllers/userControllers");
const { authUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);

router.route("/createBill").post(newBill); //create bill
router.route("/modifyBill").post(modifyBill); // modify existing bill
router.route("/billSummary").get(billSummary); //send values for billwise and daywise summaries.

router.route("/stockStatus").get(stockStatus); //get stock based on querry

router.route("/stockModify").post(authUser); //add/modify stock

router.route("/modifyBill").post(authUser);

module.exports = router;
