const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  retraitSolde: joi.number().allow(0),
  retraitEmitter: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  retraitReceiver: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  iscanceled: joi.boolean(),
  canceledAt: joi.date().options({ convert: true }).allow(null).allow('')
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  retraitSolde: joi.number().allow(0),
  retraitEmitter: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  retraitReceiver: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  iscanceled: joi.boolean(),
  canceledAt: joi.date().options({ convert: true }).allow(null).allow(''),
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
      updatedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      retraitSolde: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      retraitEmitter: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      retraitReceiver: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      iscanceled: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      canceledAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
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