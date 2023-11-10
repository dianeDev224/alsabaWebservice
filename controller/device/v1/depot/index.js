const depotDb = require('../../../../data-access/depotDb');

const depotSchema = require('../../../../validation/schema/depot');

const createValidation = require('../../../../validation')(depotSchema.createSchema);
const updateValidation = require('../../../../validation')(depotSchema.updateSchema);
const filterValidation = require('../../../../validation')(depotSchema.filterValidationSchema);
const addDepotUsecase = require('../../../../use-case/depot/addDepot')({
  depotDb,
  createValidation 
});
const findAllDepotUsecase = require('../../../../use-case/depot/findAllDepot')({
  depotDb,
  filterValidation
});
const getDepotCountUsecase = require('../../../../use-case/depot/getDepotCount')({
  depotDb,
  filterValidation
});
const getDepotUsecase = require('../../../../use-case/depot/getDepot')({
  depotDb,
  filterValidation
});
const updateDepotUsecase = require('../../../../use-case/depot/updateDepot')({
  depotDb,
  updateValidation 
});
const partialUpdateDepotUsecase = require('../../../../use-case/depot/partialUpdateDepot')({ depotDb });
const softDeleteDepotUsecase = require('../../../../use-case/depot/softDeleteDepot')({ depotDb });
const softDeleteManyDepotUsecase = require('../../../../use-case/depot/softDeleteManyDepot')({ depotDb });
const bulkInsertDepotUsecase = require('../../../../use-case/depot/bulkInsertDepot')({ depotDb });
const bulkUpdateDepotUsecase = require('../../../../use-case/depot/bulkUpdateDepot')({ depotDb });
const deleteDepotUsecase = require('../../../../use-case/depot/deleteDepot')({ depotDb });
const deleteManyDepotUsecase = require('../../../../use-case/depot/deleteManyDepot')({ depotDb });

const depotController = require('./depot');

const addDepot = depotController.addDepot(addDepotUsecase);
const findAllDepot = depotController.findAllDepot(findAllDepotUsecase);
const getDepotCount = depotController.getDepotCount(getDepotCountUsecase);
const getDepotById = depotController.getDepot(getDepotUsecase);
const updateDepot = depotController.updateDepot(updateDepotUsecase);
const partialUpdateDepot = depotController.partialUpdateDepot(partialUpdateDepotUsecase);
const softDeleteDepot = depotController.softDeleteDepot(softDeleteDepotUsecase);
const softDeleteManyDepot = depotController.softDeleteManyDepot(softDeleteManyDepotUsecase);
const bulkInsertDepot = depotController.bulkInsertDepot(bulkInsertDepotUsecase);
const bulkUpdateDepot = depotController.bulkUpdateDepot(bulkUpdateDepotUsecase);
const deleteDepot = depotController.deleteDepot(deleteDepotUsecase);
const deleteManyDepot = depotController.deleteManyDepot(deleteManyDepotUsecase);

module.exports = {
  addDepot,
  findAllDepot,
  getDepotCount,
  getDepotById,
  updateDepot,
  partialUpdateDepot,
  softDeleteDepot,
  softDeleteManyDepot,
  bulkInsertDepot,
  bulkUpdateDepot,
  deleteDepot,
  deleteManyDepot,
};