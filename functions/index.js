const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTnupEdNZ4HNcoqLaUGkQDuyaFHtMNBbCkIdqYHk3hKgikwOgFzssikER1PQWRyrUlx0Ffc5imiVXlTh6wlUqan00dlyv59s3"
);

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Rquest ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen commmand
exports.api = functions.https.onRequest(app);

// pk_test_51HTnupEdNZ4HNcoqY6fGn83bTi592IaNS36D4cQiPQNaHm4WHXcKSWcC1Vqvu0ZUmAfD4LafZApCk4n4xYx4Z7k700I1wR90I5
// sk_test_51HTnupEdNZ4HNcoqLaUGkQDuyaFHtMNBbCkIdqYHk3hKgikwOgFzssikER1PQWRyrUlx0Ffc5imiVXlTh6wlUqan00dlyv59s3
