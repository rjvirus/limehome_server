const defaultUserId = "pCsGr1nIgRT0iPvU76m0";
const fs = require('../firestore');
const db = fs.firestore();

let docRef = db.collection('users').doc(defaultUserId);

function addFavourite(req, res) {
	const propertyId = req.body.propertyId;

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
}

function deleteFavourite(req, res) {
	const propertyId = req.body.propertyId;

	if (typeof propertyId === 'string') {
		res.status(400).json({ success: false, message: "Bad Request" })
	} else {
		docRef.get().then(doc => {
			if (!doc.exists) {
				res.status(500).json({ success: false, message: "Database not initialized" });
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
			res.status(200).json({ success: true });
		}).catch((e) => {
			res.status(500).json({
				success: false,
				error: e
			})
		});
	}
}

function getAllFavourite(req, res) {

	docRef.get().then(doc => {
		if (!doc.exists) {
			res.json({ message: 'No such document!' });
		} else {
			res.json({ message: 'Succesfull!', data: doc.data().favourites });
		}
	})
}

module.exports = { addFavourite, deleteFavourite, getAllFavourite }
