const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  updateAt: joi.date().options({ convert: true }).allow(null).allow(''),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  startTime: joi.date().options({ convert: true }).allow(null).allow(''),
  endTime: joi.date().options({ convert: true }).allow(null).allow(''),
  available: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  updateAt: joi.date().options({ convert: true }).allow(null).allow(''),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  startTime: joi.date().options({ convert: true }).allow(null).allow(''),
  endTime: joi.date().options({ convert: true }).allow(null).allow(''),
  available: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      updateAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      createdAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      startTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      endTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      available: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
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