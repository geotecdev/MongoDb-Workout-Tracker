const express = require("express");
const router = require("express").Router();
const path = require("path");

//index.html route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exersise.html route

//stats.html route


module.exports = router;