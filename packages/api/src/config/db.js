const monk = require('monk');
const { MONGODB_ATLAS_URL } = require('./db');

const db = monk(MONGODB_ATLAS_URL);

module.exports = db;
