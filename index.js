var _ = require('ramda');
var PF = require('pointfree-fantasy');
var Future = require('data.future');

module.exports = Object.freeze({
  curry: _.curry,
  map: PF.map,
  compose: PF.compose,
  Future: Future
});
