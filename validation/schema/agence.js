const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');  
const OperationsDefault = require('../../constants/Operations');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  agenceName: joi.string().allow(null).allow(''),
  phoneNumber: joi.string().allow(null).allow(''),
  responsable: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isActived: joi.boolean(),
  typeAgence: joi.number().allow(0)
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  agenceName: joi.string().allow(null).allow(''),
  phoneNumber: joi.string().allow(null).allow(''),
  responsable: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isActived: joi.boolean(),
  typeAgence: joi.number().allow(0),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      agenceName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      phoneNumber: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      responsable: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      isActived: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
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