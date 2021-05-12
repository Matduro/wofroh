// const express = require("express");
const router = require("express").Router();
const cookieSession = require("cookie-session");

module.exports = (db) => {
  router.get("/:user_id", (req, res) => {
    req.session.user_id = req.params.user_id;
    //console.log("req.params.user_id", req.params.user_id);
    res.redirect("/");
  });
  return router;
};
