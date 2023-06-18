/*
 * File: about.js
 * Student: Prosper Alabi
 * Student ID: 300833841
 * Date: June 02,2023
 */

// Adding  routes for About page
const express = require("express");
const router = express.Router();

// Define the route handlers
router.get("/about", (req, res) => {
  // Render
  res.render("about");
});

// Export the router
module.exports = router;
