const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const favouriteRoute = require("./routes/favourite")

// Middleware
app.use(cors({ origin: true }));

app.use('/api/favourites', favouriteRoute)

exports.app = functions.https.onRequest(app);