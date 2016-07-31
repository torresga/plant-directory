var knexfile = require('./knexfile.js').development; 
var knex = require('knex')(knexfile);

var bookshelf = require("bookshelf")(knex);

module.exports = bookshelf; 
