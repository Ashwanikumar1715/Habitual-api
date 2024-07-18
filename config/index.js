const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const FRONTEND_URL = "https://habitual-e2js.onrender.com";

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: FRONTEND_URL,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
