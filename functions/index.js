const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-9a206..firebaseio.com"
});

const db = admin.firestore();

app.put('/api/favourites', (req, res) => {
  const propertyId = req.body.propertyId;
  let docRef = db.collection('users').doc('pCsGr1nIgRT0iPvU76m0');

  docRef.get().then(doc => {
    if (!doc.exists) {
      res.json({ success: false });
    } else {
      return doc.data()
    }
  }).then(data => {
    let newFav = data.favourites.slice();
    if (data.favourites.indexOf(propertyId) === -1) {
      newFav.push(propertyId);
    } else {
      throw Error('Already exists');
    }
    return docRef.update({ favourites: newFav });
  }).then(doc => {
    res.json({ success: true });
  }).catch((e) => {
    res.json({
      success: false,
      message: e.message
    })
  });


});

app.delete('/api/favourites', (req, res) => {
  const propertyId = req.body.propertyId;
  let docRef = db.collection('users').doc('pCsGr1nIgRT0iPvU76m0');

  docRef.get().then(doc => {
    if (!doc.exists) {
      res.json({ success: false });
    } else {
      return doc.data()
    }
  }).then(data => {
    let updatedFav = data.favourites.slice();
    let index = data.favourites.indexOf(propertyId);
    if (index === -1) {
      throw Error('Does not exists');
    } else {
      updatedFav.splice(index, 1);
    }
    return docRef.update({ favourites: updatedFav });
  }).then(doc => {
    res.json({ success: true });
  }).catch((e) => {
    res.json({
      success: false,
      message: e.message
    })
  });

})

app.get('/api/favourites', (req, res) => {
  let docRef = db.collection('users').doc('pCsGr1nIgRT0iPvU76m0');
  docRef.get().then(doc => {
    if (!doc.exists) {
      res.json({ message: 'No such document!' });
    } else {
      res.json({ message: 'Succesfull!', data: doc.data().favourites });
    }
  })
});

exports.app = functions.https.onRequest(app);