const admin = require("firebase-admin");
const config = require('./config.json');

module.exports = admin.initializeApp({
	credential: admin.credential.cert(config.FIREBASE_CONFIG),
	databaseURL: "https://fir-api-9a206..firebaseio.com"
});