const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PldAVEtkXek43DnjSkwleI7QO3TBlRo8MA3hMLnTnJfMR5TKsBjFHpSiBPK0cGtcaaop6qvVHLHk14YljRYcdXj00MBQXFyEH"
);

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

// - listen Commands
exports.api = functions.https.onRequest(app);
