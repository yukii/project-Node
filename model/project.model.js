const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema ({
	nameProj: String,
	description: String,
	dateBegin: String,
	dateEnd: String,
	money: Number,
	status: String,
});

module.exports = mongoose.model("Projet", ProjetSchema);
