const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');  
const OperationsDefault = require('../../constants/Operations');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  mal: joi.number().allow(0),
  sender: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  receiver: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isValidated: joi.boolean(),
  fraisPartenaire: joi.number().allow(0),
  partenaire: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isCanceled: joi.boolean(),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  canceledAt: joi.date().options({ convert: true }).allow(null).allow(''),
  deletedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  receiverCity: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow('')
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  mal: joi.number().allow(0),
  sender: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  receiver: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isValidated: joi.boolean(),
  fraisPartenaire: joi.number().allow(0),
  partenaire: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isCanceled: joi.boolean(),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  canceledAt: joi.date().options({ convert: true }).allow(null).allow(''),
  deletedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  receiverCity: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      mal: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      sender: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      receiver: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      isValidated: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      fraisPartenaire: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      partenaire: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      isCanceled: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      updatedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      canceledAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      deletedAt: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      receiverCity: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
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