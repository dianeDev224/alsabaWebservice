const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  publishedBy: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isClosed: joi.boolean(),
  closedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  fromCountry: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  toCountry: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  leavingAt: joi.date().options({ convert: true }).allow(null).allow(''),
  arrivingAt: joi.date().options({ convert: true }).allow(null).allow(''),
  availableWeight: joi.number().integer().allow(0),
  takedBy: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow('')
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  publishedBy: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isClosed: joi.boolean(),
  closedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  fromCountry: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  toCountry: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  leavingAt: joi.date().options({ convert: true }).allow(null).allow(''),
  arrivingAt: joi.date().options({ convert: true }).allow(null).allow(''),
  availableWeight: joi.number().integer().allow(0),
  takedBy: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      createdAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      publishedBy: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      isClosed: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      closedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      fromCountry: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      toCountry: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      leavingAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      arrivingAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      availableWeight: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      takedBy: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }
    ).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select

}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};