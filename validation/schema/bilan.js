const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  isActive: joi.boolean(),
  benefice: joi.number().allow(0),
  gain: joi.number().allow(0),
  capitalPropre: joi.number().allow(0),
  chargeFictive: joi.number().allow(0),
  chargeReelle: joi.number().allow(0),
  Dettes: joi.number().allow(0),
  Disponibiite: joi.number().allow(0),
  entre: joi.number().allow(0),
  sortie: joi.number().allow(0),
  epargne: joi.number().allow(0),
  initiale: joi.number().allow(0),
  injection: joi.number().allow(0),
  pret: joi.number().allow(0),
  solde: joi.number().allow(0)
}).unknown(true);

const updateSchema = joi.object({
  isDeleted: joi.boolean(),
  createdAt: joi.date().options({ convert: true }).allow(null).allow(''),
  updatedAt: joi.date().options({ convert: true }).allow(null).allow(''),
  isActive: joi.boolean(),
  benefice: joi.number().allow(0),
  gain: joi.number().allow(0),
  capitalPropre: joi.number().allow(0),
  chargeFictive: joi.number().allow(0),
  chargeReelle: joi.number().allow(0),
  Dettes: joi.number().allow(0),
  Disponibiite: joi.number().allow(0),
  entre: joi.number().allow(0),
  sortie: joi.number().allow(0),
  epargne: joi.number().allow(0),
  initiale: joi.number().allow(0),
  injection: joi.number().allow(0),
  pret: joi.number().allow(0),
  solde: joi.number().allow(0),
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
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      benefice: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      gain: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      capitalPropre: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      chargeFictive: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      chargeReelle: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      Dettes: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      Disponibiite: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      entre: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      sortie: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      epargne: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      initiale: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      injection: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      pret: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
      solde: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
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