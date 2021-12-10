const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const { addFavourite, deleteFavourite, getAllFavourite } = require('./favouriteController');
app.use(cors({ origin: true }));

app.put('/api/favourites', addFavourite);

app.delete('/api/favourites', deleteFavourite)

app.get('/api/favourites', getAllFavourite);

exports.app = functions.https.onRequest(app);