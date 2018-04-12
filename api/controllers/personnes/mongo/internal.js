'use strict';

var _ = require('lodash');
var mongo = require('../../../../mongo');
var personnesDAO = require('./dao').personnesDAO;
var ObjectID = require('mongodb').ObjectID;

/**
 * Get All personnes
 */
function getAll(){
	return mongo.getDao(personnesDAO).then(function(personnesDAO) {
		var query = {};
		return personnesDAO.find(query).then(function(personnes){
			if(_.isEmpty(personnes)){
				return [];
			}
			return personnes;
		});
	});
}

/**
 * Updating an existing personne in the bdd
 * @param {object} personne - the personne to update
 */
function update(personne){
	return mongo.getDao(personnesDAO).then(function(personnesDAO) {
		var personneWithObjectId = _.clone(personne,true);
        personneWithObjectId._id = new ObjectID(personne._id);
		return personnesDAO.save(personneWithObjectId);
	});
}

function add(personne){
    return mongo.getDao(personnesDAO).then(function(personnesDAO) {
        return personnesDAO.save(personne);
    });
}

/**
 * Remove an url by id
 * @param {string} id - criteria in order to remove an url - corresponds to the urlId field in the mongodb collection
 */
function remove(id){
	return mongo.getDao(personnesDAO).then(function(personnesDAO) {
		return personnesDAO.remove({_id:new ObjectID(id)});
	});
}

exports.getAll = getAll;
exports.remove = remove;
exports.update = update;
exports.add = add;