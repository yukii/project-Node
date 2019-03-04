const Projet = require('../model/projet.model');

exports.createdProjet = function(req, res){
	let projet = new Projet({
		nameProj: req.body.nameProj,
		description: req.body.description,
		dateBegin: req.body.dateBegin,
		dateEnd: req.body.dateEnd,
		money: req.body.money,
		status: req.body.status,
	});
	projet.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Projet created");
			console.log(projet);
		}
		res.send(projet);
	});
}


exports.all = function(req, res) {
	Projet.find((err, res) => {
		if (err) {
			console.log(err);
		}
		res.send(Projet);
	});


exports.one = function(req, res) {
	Projet.findById(req.params.id, (err, res) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log(projet);
		}
		res.send(projet);
	});
}

exports.removeOne = (req, res) => {
	Projet.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('delete');
		}
		res.send(projet);
	});
}

exports.updateOne = (req, res) => {
	Projet.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('updated');
		}
		res.send(projet);
	});
}

exports.countall= (req,res) => {
	Projet.count({}, function(err, count){
		if (err) {
			console.log(err);
		}
		else{
    		console.log( "Number of projects:", count);
		}
		res.send(count);
	});
}


