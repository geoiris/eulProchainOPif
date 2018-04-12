'use strict';

var personnes = require('../controllers/personnes.ctrl');

module.exports = function(router) {
	// Get the version of the application from the package.json file
	router.get('/version', function (req, res, next) {
        var currentVersion = {"version":require('../../package.json').version};
		console.log(currentVersion);
    	res.json(currentVersion);
    });

    // Get all personnes
    router.get('/personnes', function (req, res, next) {
		personnes.getAll().then(function(datas){
			res.json(datas);
    	});
    });

    // Delete one personne
	router.delete('/personnes/:id', function (req, res, next) {
		personnes.remove(req.params.id).then(function(datas){
			res.json(datas);
    	});
    });

    // Add a personne
	router.post('/personnes/', function (req, res) {
		personnes.add(req.body).then(function(datas){
			res.json(datas);
    	});
    });

    // Update a personne
    router.put('/personnes/', function (req, res) {
        personnes.update(req.body).then(function(datas){
            res.json(datas);
        });
    });
};