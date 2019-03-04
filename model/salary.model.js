const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarySchema = new Schema ({
	nameSal: String,
	firstName: String,
	birthday: String,
	adress: String,
	phone: Number,
	mail: String,
	poste: String,
});

module.exports = mongoose.model("Salary", SalarySchema);
