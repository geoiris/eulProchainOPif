'use strict';

var baseDao = require('../../BaseDao');
var util = require('util');

var CONSTANT_COLLECTION_NAME = 'personnes';

function personnesDAO(db) {
    baseDao.BaseDAO.call(this, db, CONSTANT_COLLECTION_NAME);
}

util.inherits(personnesDAO, baseDao.BaseDAO);

module.exports.personnesDAO = personnesDAO;