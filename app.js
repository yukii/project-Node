const express = require('express');
const mongoose = require('mongoose');
const projetController = require('./controller/projet.controller.js');
const cliController = require('./controller/client.controller.js');
const salController = require('./controller/salary.controller.js');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect('mongodb://moi:12345A@ds155845.mlab.com:55845/company', (err) => {
	if (err) {
		console.log('database not connect');
	}
	else{
		console.log('database connected');
	}
});

//crud proj
app.post('/projet/created', projetController.createdProjet);
app.get('/projet/all', projetController.all);
app.get('/projet/:id', projetController.one);
app.delete('/projet/remove/:id', projetController.removeOne);
app.put('/projet/update/:id', projetController.updateOne);

//crud cli
app.post('/client/created', cliController.createdProjet);
app.get('/client/all', cliController.all);
app.get('/client/:id', cliController.one);
app.delete('/client/remove/:id', cliController.removeOne);
app.put('/client/update/:id', cliController.updateOne);

//crud salary
app.post('/salary/created', salController.createdProjet);
app.get('/salary/all', salController.all);
app.get('/salary/:id', salController.one);
app.delete('/salary/remove/:id', salController.removeOne);
app.put('/salary/update/:id', salController.updateOne);


//count
app.post('/salary/count', salController.count);
app.post('/projet/count', projetController.count);
app.post('/client/count', cliController.count);


const port = 2000;

app.listen(port, () => {
	console.log('server run');
});

