const caisseDb = require('../../../../data-access/caisseDb');

const caisseSchema = require('../../../../validation/schema/caisse');

const createValidation = require('../../../../validation')(caisseSchema.createSchema);
const updateValidation = require('../../../../validation')(caisseSchema.updateSchema);
const filterValidation = require('../../../../validation')(caisseSchema.filterValidationSchema);
const addCaisseUsecase = require('../../../../use-case/caisse/addCaisse')({
  caisseDb,
  createValidation 
});
const findAllCaisseUsecase = require('../../../../use-case/caisse/findAllCaisse')({
  caisseDb,
  filterValidation
});
const getCaisseCountUsecase = require('../../../../use-case/caisse/getCaisseCount')({
  caisseDb,
  filterValidation
});
const getCaisseUsecase = require('../../../../use-case/caisse/getCaisse')({
  caisseDb,
  filterValidation
});
const updateCaisseUsecase = require('../../../../use-case/caisse/updateCaisse')({
  caisseDb,
  updateValidation 
});
const partialUpdateCaisseUsecase = require('../../../../use-case/caisse/partialUpdateCaisse')({ caisseDb });
const softDeleteCaisseUsecase = require('../../../../use-case/caisse/softDeleteCaisse')({ caisseDb });
const softDeleteManyCaisseUsecase = require('../../../../use-case/caisse/softDeleteManyCaisse')({ caisseDb });
const bulkInsertCaisseUsecase = require('../../../../use-case/caisse/bulkInsertCaisse')({ caisseDb });
const bulkUpdateCaisseUsecase = require('../../../../use-case/caisse/bulkUpdateCaisse')({ caisseDb });
const deleteCaisseUsecase = require('../../../../use-case/caisse/deleteCaisse')({ caisseDb });
const deleteManyCaisseUsecase = require('../../../../use-case/caisse/deleteManyCaisse')({ caisseDb });

const caisseController = require('./caisse');

const addCaisse = caisseController.addCaisse(addCaisseUsecase);
const findAllCaisse = caisseController.findAllCaisse(findAllCaisseUsecase);
const getCaisseCount = caisseController.getCaisseCount(getCaisseCountUsecase);
const getCaisseById = caisseController.getCaisse(getCaisseUsecase);
const updateCaisse = caisseController.updateCaisse(updateCaisseUsecase);
const partialUpdateCaisse = caisseController.partialUpdateCaisse(partialUpdateCaisseUsecase);
const softDeleteCaisse = caisseController.softDeleteCaisse(softDeleteCaisseUsecase);
const softDeleteManyCaisse = caisseController.softDeleteManyCaisse(softDeleteManyCaisseUsecase);
const bulkInsertCaisse = caisseController.bulkInsertCaisse(bulkInsertCaisseUsecase);
const bulkUpdateCaisse = caisseController.bulkUpdateCaisse(bulkUpdateCaisseUsecase);
const deleteCaisse = caisseController.deleteCaisse(deleteCaisseUsecase);
const deleteManyCaisse = caisseController.deleteManyCaisse(deleteManyCaisseUsecase);

module.exports = {
  addCaisse,
  findAllCaisse,
  getCaisseCount,
  getCaisseById,
  updateCaisse,
  partialUpdateCaisse,
  softDeleteCaisse,
  softDeleteManyCaisse,
  bulkInsertCaisse,
  bulkUpdateCaisse,
  deleteCaisse,
  deleteManyCaisse,
};