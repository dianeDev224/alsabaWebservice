const retraitDb = require('../../../../data-access/retraitDb');

const retraitSchema = require('../../../../validation/schema/retrait');

const createValidation = require('../../../../validation')(retraitSchema.createSchema);
const updateValidation = require('../../../../validation')(retraitSchema.updateSchema);
const filterValidation = require('../../../../validation')(retraitSchema.filterValidationSchema);
const addRetraitUsecase = require('../../../../use-case/retrait/addRetrait')({
  retraitDb,
  createValidation 
});
const findAllRetraitUsecase = require('../../../../use-case/retrait/findAllRetrait')({
  retraitDb,
  filterValidation
});
const getRetraitCountUsecase = require('../../../../use-case/retrait/getRetraitCount')({
  retraitDb,
  filterValidation
});
const getRetraitUsecase = require('../../../../use-case/retrait/getRetrait')({
  retraitDb,
  filterValidation
});
const updateRetraitUsecase = require('../../../../use-case/retrait/updateRetrait')({
  retraitDb,
  updateValidation 
});
const partialUpdateRetraitUsecase = require('../../../../use-case/retrait/partialUpdateRetrait')({ retraitDb });
const softDeleteRetraitUsecase = require('../../../../use-case/retrait/softDeleteRetrait')({ retraitDb });
const softDeleteManyRetraitUsecase = require('../../../../use-case/retrait/softDeleteManyRetrait')({ retraitDb });
const bulkInsertRetraitUsecase = require('../../../../use-case/retrait/bulkInsertRetrait')({ retraitDb });
const bulkUpdateRetraitUsecase = require('../../../../use-case/retrait/bulkUpdateRetrait')({ retraitDb });
const deleteRetraitUsecase = require('../../../../use-case/retrait/deleteRetrait')({ retraitDb });
const deleteManyRetraitUsecase = require('../../../../use-case/retrait/deleteManyRetrait')({ retraitDb });

const retraitController = require('./retrait');

const addRetrait = retraitController.addRetrait(addRetraitUsecase);
const findAllRetrait = retraitController.findAllRetrait(findAllRetraitUsecase);
const getRetraitCount = retraitController.getRetraitCount(getRetraitCountUsecase);
const getRetraitById = retraitController.getRetrait(getRetraitUsecase);
const updateRetrait = retraitController.updateRetrait(updateRetraitUsecase);
const partialUpdateRetrait = retraitController.partialUpdateRetrait(partialUpdateRetraitUsecase);
const softDeleteRetrait = retraitController.softDeleteRetrait(softDeleteRetraitUsecase);
const softDeleteManyRetrait = retraitController.softDeleteManyRetrait(softDeleteManyRetraitUsecase);
const bulkInsertRetrait = retraitController.bulkInsertRetrait(bulkInsertRetraitUsecase);
const bulkUpdateRetrait = retraitController.bulkUpdateRetrait(bulkUpdateRetraitUsecase);
const deleteRetrait = retraitController.deleteRetrait(deleteRetraitUsecase);
const deleteManyRetrait = retraitController.deleteManyRetrait(deleteManyRetraitUsecase);

module.exports = {
  addRetrait,
  findAllRetrait,
  getRetraitCount,
  getRetraitById,
  updateRetrait,
  partialUpdateRetrait,
  softDeleteRetrait,
  softDeleteManyRetrait,
  bulkInsertRetrait,
  bulkUpdateRetrait,
  deleteRetrait,
  deleteManyRetrait,
};