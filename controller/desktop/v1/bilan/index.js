const bilanDb = require('../../../../data-access/bilanDb');

const bilanSchema = require('../../../../validation/schema/bilan');

const createValidation = require('../../../../validation')(bilanSchema.createSchema);
const updateValidation = require('../../../../validation')(bilanSchema.updateSchema);
const filterValidation = require('../../../../validation')(bilanSchema.filterValidationSchema);
const addBilanUsecase = require('../../../../use-case/bilan/addBilan')({
  bilanDb,
  createValidation 
});
const findAllBilanUsecase = require('../../../../use-case/bilan/findAllBilan')({
  bilanDb,
  filterValidation
});
const getBilanCountUsecase = require('../../../../use-case/bilan/getBilanCount')({
  bilanDb,
  filterValidation
});
const getBilanUsecase = require('../../../../use-case/bilan/getBilan')({
  bilanDb,
  filterValidation
});
const updateBilanUsecase = require('../../../../use-case/bilan/updateBilan')({
  bilanDb,
  updateValidation 
});
const partialUpdateBilanUsecase = require('../../../../use-case/bilan/partialUpdateBilan')({ bilanDb });
const softDeleteBilanUsecase = require('../../../../use-case/bilan/softDeleteBilan')({ bilanDb });
const softDeleteManyBilanUsecase = require('../../../../use-case/bilan/softDeleteManyBilan')({ bilanDb });
const bulkInsertBilanUsecase = require('../../../../use-case/bilan/bulkInsertBilan')({ bilanDb });
const bulkUpdateBilanUsecase = require('../../../../use-case/bilan/bulkUpdateBilan')({ bilanDb });
const deleteBilanUsecase = require('../../../../use-case/bilan/deleteBilan')({ bilanDb });
const deleteManyBilanUsecase = require('../../../../use-case/bilan/deleteManyBilan')({ bilanDb });

const bilanController = require('./bilan');

const addBilan = bilanController.addBilan(addBilanUsecase);
const findAllBilan = bilanController.findAllBilan(findAllBilanUsecase);
const getBilanCount = bilanController.getBilanCount(getBilanCountUsecase);
const getBilanById = bilanController.getBilan(getBilanUsecase);
const updateBilan = bilanController.updateBilan(updateBilanUsecase);
const partialUpdateBilan = bilanController.partialUpdateBilan(partialUpdateBilanUsecase);
const softDeleteBilan = bilanController.softDeleteBilan(softDeleteBilanUsecase);
const softDeleteManyBilan = bilanController.softDeleteManyBilan(softDeleteManyBilanUsecase);
const bulkInsertBilan = bilanController.bulkInsertBilan(bulkInsertBilanUsecase);
const bulkUpdateBilan = bilanController.bulkUpdateBilan(bulkUpdateBilanUsecase);
const deleteBilan = bilanController.deleteBilan(deleteBilanUsecase);
const deleteManyBilan = bilanController.deleteManyBilan(deleteManyBilanUsecase);

module.exports = {
  addBilan,
  findAllBilan,
  getBilanCount,
  getBilanById,
  updateBilan,
  partialUpdateBilan,
  softDeleteBilan,
  softDeleteManyBilan,
  bulkInsertBilan,
  bulkUpdateBilan,
  deleteBilan,
  deleteManyBilan,
};