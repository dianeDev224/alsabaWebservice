const transfertDb = require('../../../../data-access/transfertDb');

const transfertSchema = require('../../../../validation/schema/transfert');

const createValidation = require('../../../../validation')(transfertSchema.createSchema);
const updateValidation = require('../../../../validation')(transfertSchema.updateSchema);
const filterValidation = require('../../../../validation')(transfertSchema.filterValidationSchema);
const addTransfertUsecase = require('../../../../use-case/transfert/addTransfert')({
  transfertDb,
  createValidation 
});
const findAllTransfertUsecase = require('../../../../use-case/transfert/findAllTransfert')({
  transfertDb,
  filterValidation
});
const getTransfertCountUsecase = require('../../../../use-case/transfert/getTransfertCount')({
  transfertDb,
  filterValidation
});
const getTransfertUsecase = require('../../../../use-case/transfert/getTransfert')({
  transfertDb,
  filterValidation
});
const updateTransfertUsecase = require('../../../../use-case/transfert/updateTransfert')({
  transfertDb,
  updateValidation 
});
const partialUpdateTransfertUsecase = require('../../../../use-case/transfert/partialUpdateTransfert')({ transfertDb });
const softDeleteTransfertUsecase = require('../../../../use-case/transfert/softDeleteTransfert')({ transfertDb });
const softDeleteManyTransfertUsecase = require('../../../../use-case/transfert/softDeleteManyTransfert')({ transfertDb });
const bulkInsertTransfertUsecase = require('../../../../use-case/transfert/bulkInsertTransfert')({ transfertDb });
const bulkUpdateTransfertUsecase = require('../../../../use-case/transfert/bulkUpdateTransfert')({ transfertDb });
const deleteTransfertUsecase = require('../../../../use-case/transfert/deleteTransfert')({ transfertDb });
const deleteManyTransfertUsecase = require('../../../../use-case/transfert/deleteManyTransfert')({ transfertDb });

const transfertController = require('./transfert');

const addTransfert = transfertController.addTransfert(addTransfertUsecase);
const findAllTransfert = transfertController.findAllTransfert(findAllTransfertUsecase);
const getTransfertCount = transfertController.getTransfertCount(getTransfertCountUsecase);
const getTransfertById = transfertController.getTransfert(getTransfertUsecase);
const updateTransfert = transfertController.updateTransfert(updateTransfertUsecase);
const partialUpdateTransfert = transfertController.partialUpdateTransfert(partialUpdateTransfertUsecase);
const softDeleteTransfert = transfertController.softDeleteTransfert(softDeleteTransfertUsecase);
const softDeleteManyTransfert = transfertController.softDeleteManyTransfert(softDeleteManyTransfertUsecase);
const bulkInsertTransfert = transfertController.bulkInsertTransfert(bulkInsertTransfertUsecase);
const bulkUpdateTransfert = transfertController.bulkUpdateTransfert(bulkUpdateTransfertUsecase);
const deleteTransfert = transfertController.deleteTransfert(deleteTransfertUsecase);
const deleteManyTransfert = transfertController.deleteManyTransfert(deleteManyTransfertUsecase);

module.exports = {
  addTransfert,
  findAllTransfert,
  getTransfertCount,
  getTransfertById,
  updateTransfert,
  partialUpdateTransfert,
  softDeleteTransfert,
  softDeleteManyTransfert,
  bulkInsertTransfert,
  bulkUpdateTransfert,
  deleteTransfert,
  deleteManyTransfert,
};