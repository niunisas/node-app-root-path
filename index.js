'use strict';
const process = require('process'); 

var lib = require('./lib/app-root-path.js');
module.exports = lib(process.cwd());
