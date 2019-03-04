const Client = require('../model/client.model');

exports.createdClient = function(req, res){
	let cli = new Client({
		company: req.body.company,
		adress: req.body.adress,
		contact: req.body.contact,
		activity: req.body.activity,
	});
	cli.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("client created");
			console.log(cli);
		}
		res.send(cli);
	});
}


exports.all = function(req, res) {
	Client.find((err, res) => {
		if (err) {
			console.log(err);
		}
		res.send(cli);
	});
}

exports.one = function(req, res) {
	Client.findById(req.params.id, (err, res) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log(cli);
		}
		res.send(cli);
	});
}

exports.removeOne = (req, res) => {
	Client.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('delete');
		}
		res.send(cli);
	});
}

exports.updateOne = (req, res) => {
	Client.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('updated');
		}
		res.send(cli);
	});
}

exports.countall= (req,res) => {
	Client.count({}, function(err, count){
		if (err) {
			console.log(err);
		}
		else{
    		console.log( "Number of client:", count);
		}
		res.send(count);
	});
}

