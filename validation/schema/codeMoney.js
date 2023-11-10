const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  solde: joi.number().allow(0),
  senderCode: joi.number().allow(0),
  receiverCode: joi.number().allow(0),
  isValidated: joi.boolean(),
  deletedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  validatedAt: joi.date().options({ convert: true }).allow(null).allow('')
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  solde: joi.number().allow(0),
  senderCode: joi.number().allow(0),
  receiverCode: joi.number().allow(0),
  isValidated: joi.boolean(),
  deletedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  validatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      solde: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      senderCode: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      receiverCode: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      isValidated: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      deletedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      updatedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      validatedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
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