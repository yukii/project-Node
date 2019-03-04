const Salary = require('../model/salary.model');

exports.createdSalary = function(req, res){
	let salary = new Salary({
		nameSal: req.body.nameSal,
		firstName: req.body.firstName,
		birthday: req.body.birthday,
		adress: req.body.adress,
		phone: req.body.phone,
		mail: req.body.mail,
		poste: req.body.poste,
	});
	salary.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Salary created");
			console.log(salary);
		}
		res.send(salary);
	});
}


exports.all = function(req, res) {
	Salary.find((err, res) => {
		if (err) {
			console.log(err);
		}
		res.send(salary);
	});
}

exports.one = function(req, res) {
	Salary.findById(req.params.id, (err, res) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log(salary);
		}
		res.send(salary);
	});
}

exports.removeOne = (req, res) => {
	Salary.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('delete');
		}
		res.send(salary);
	});
}

exports.updateOne = (req, res) => {
	Salary.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('updated');
		}
		res.send(salary);
	});
}

exports.countall= (req,res) => {
	Salary.count({}, function(err, count){
		if (err) {
			console.log(err);
		}
		else{
    		console.log( "Number of salary:", count);
		}
		res.send(count);
	});
}

