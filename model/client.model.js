const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema ({
	company: String,
	adress: String,
	// - Contact référent (Nom, prénom, tel, mail)
	contact: String,
	activity: String,
});

module.exports = mongoose.model("Client", ClientSchema);
