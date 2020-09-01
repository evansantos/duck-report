const monk = require('monk');
const { MONGODB_ATLAS_URL } = require('./env');

const db = monk(MONGODB_ATLAS_URL);

module.exports = db;
