const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  solde: joi.number().allow(0),
  senderCode: joi.string().allow(null).allow(''),
  receiverCode: joi.string().allow(null).allow(''),
  isValidated: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  solde: joi.number().allow(0),
  senderCode: joi.string().allow(null).allow(''),
  receiverCode: joi.string().allow(null).allow(''),
  isValidated: joi.boolean(),
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
      senderCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      receiverCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isValidated: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
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