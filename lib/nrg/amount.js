/*!
 * amount.js - amount object for bcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

const assert = require('assert');
const util = require('../utils/util');

/**
 * Represents a NRG amount (TNNRGs internally).
 * @alias module:nrg.Amount
 * @constructor
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @property {Amount} value
 */

function Amount(value, unit) {
  if (!(this instanceof Amount))
    return new Amount(value, unit);

  this.value = 0;

  if (value != null)
    this.fromOptions(value, unit);
}

/**
 * Inject properties from options.
 * @private
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @returns {Amount}
 */

Amount.prototype.fromOptions = function fromOptions(value, unit) {
  if (typeof unit === 'string')
    return this.from(unit, value);

  if (typeof value === 'number')
    return this.fromValue(value);

  return this.fromNRG(value);
};

/**
 * Get TNNRG value.
 * @returns {Amount}
 */

Amount.prototype.toValue = function toValue() {
  return this.value;
};

/**
 * Get TNNRG string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toTNNRGs = function toTNNRGs(num) {
  if (num)
    return this.value;

  return this.value.toString(10);
};

/**
 * Get bits string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toBits = function toBits(num) {
  return Amount.encode(this.value, 2, num);
};

/**
 * Get mnrg string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toMNRG = function toMNRG(num) {
  return Amount.encode(this.value, 5, num);
};

/**
 * Get nrg string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toNRG = function toNRG(num) {
  return Amount.encode(this.value, 8, num);
};

/**
 * Get unit string or value.
 * @param {String} unit - Can be `sat`,
 * `unrg`, `bits`, `mnrg`, or `nrg`.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.to = function to(unit, num) {
  switch (unit) {
    case 'sat':
      return this.toTNNRGs(num);
    case 'unrg':
    case 'bits':
      return this.toBits(num);
    case 'mnrg':
      return this.toMNRG(num);
    case 'nrg':
      return this.toNRG(num);
  }
  throw new Error(`Unknown unit "${unit}".`);
};

/**
 * Convert amount to NRG string.
 * @returns {String}
 */

Amount.prototype.toString = function toString() {
  return this.toNRG();
};

/**
 * Inject properties from value.
 * @private
 * @param {Amount} value
 * @returns {Amount}
 */

Amount.prototype.fromValue = function fromValue(value) {
  assert(util.isI64(value), 'Value must be an int64.');
  this.value = value;
  return this;
};

/**
 * Inject properties from TNNRGs.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromTNNRGs = function fromTNNRGs(value) {
  this.value = Amount.decode(value, 0);
  return this;
};

/**
 * Inject properties from bits.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromBits = function fromBits(value) {
  this.value = Amount.decode(value, 2);
  return this;
};

/**
 * Inject properties from mnrg.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromMNRG = function fromMNRG(value) {
  this.value = Amount.decode(value, 5);
  return this;
};

/**
 * Inject properties from nrg.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromNRG = function fromNRG(value) {
  this.value = Amount.decode(value, 8);
  return this;
};

/**
 * Inject properties from unit.
 * @private
 * @param {String} unit
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.from = function from(unit, value) {
  switch (unit) {
    case 'sat':
      return this.fromTNNRGs(value);
    case 'unrg':
    case 'bits':
      return this.fromBits(value);
    case 'mnrg':
      return this.fromMNRG(value);
    case 'nrg':
      return this.fromNRG(value);
  }
  throw new Error(`Unknown unit "${unit}".`);
};

/**
 * Instantiate amount from options.
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @returns {Amount}
 */

Amount.fromOptions = function fromOptions(value, unit) {
  return new Amount().fromOptions(value, unit);
};

/**
 * Instantiate amount from value.
 * @private
 * @param {Amount} value
 * @returns {Amount}
 */

Amount.fromValue = function fromValue(value) {
  return new Amount().fromValue(value);
};

/**
 * Instantiate amount from TNNRGs.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromTNNRGs = function fromTNNRGs(value) {
  return new Amount().fromTNNRGs(value);
};

/**
 * Instantiate amount from bits.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromBits = function fromBits(value) {
  return new Amount().fromBits(value);
};

/**
 * Instantiate amount from mnrg.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromMNRG = function fromMNRG(value) {
  return new Amount().fromMNRG(value);
};

/**
 * Instantiate amount from nrg.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromNRG = function fromNRG(value) {
  return new Amount().fromNRG(value);
};

/**
 * Instantiate amount from unit.
 * @param {String} unit
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.from = function from(unit, value) {
  return new Amount().from(unit, value);
};

/**
 * Inspect amount.
 * @returns {String}
 */

Amount.prototype.inspect = function inspect() {
  return `<Amount: ${this.toString()}>`;
};

/**
 * Safely convert TNNRGs to a NRG string.
 * This function explicitly avoids any
 * floating point arithmetic.
 * @param {Amount} value - TNNRGs.
 * @returns {String} NRG string.
 */

Amount.nrg = function nrg(value, num) {
  if (typeof value === 'string')
    return value;

  if (num)
    return util.toFloat(value, 8);
  return util.toFixed(value, 8);
};

/**
 * Safely convert a NRG string to TNNRGs.
 * @param {String} str - NRG
 * @returns {Amount} TNNRGs.
 * @throws on parse error
 */

Amount.value = function value(str) {
  if (typeof str === 'number')
    return str;

  return Amount.decode(str, 8);
};

/**
 * Safely convert TNNRGs to a NRG string.
 * @param {Amount} value
 * @param {Number} exp - Exponent.
 * @param {Boolean} num - Return a number.
 * @returns {String|Number}
 */

Amount.encode = function encode(value, exp, num) {
  if (num)
    return util.toFloat(value, exp);
  return util.toFixed(value, exp);
};

/**
 * Safely convert a NRG string to TNNRGs.
 * @param {String|Number} value - NRG
 * @param {Number} exp - Exponent.
 * @returns {Amount} TNNRGs.
 * @throws on parse error
 */

Amount.decode = function decode(value, exp) {
  if (typeof value === 'number')
    return util.fromFloat(value, exp);
  return util.fromFixed(value, exp);
};

/*
 * Expose
 */

module.exports = Amount;
