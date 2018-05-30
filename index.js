'use strict';
module.exports = (a = []) => [...new Set(a.map(JSON.stringify))].map(JSON.parse);
