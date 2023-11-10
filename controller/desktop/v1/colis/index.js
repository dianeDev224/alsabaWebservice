const colisDb = require('../../../../data-access/colisDb');

const colisSchema = require('../../../../validation/schema/colis');

const createValidation = require('../../../../validation')(colisSchema.createSchema);
const updateValidation = require('../../../../validation')(colisSchema.updateSchema);
const filterValidation = require('../../../../validation')(colisSchema.filterValidationSchema);
const addColisUsecase = require('../../../../use-case/colis/addColis')({
  colisDb,
  createValidation 
});
const findAllColisUsecase = require('../../../../use-case/colis/findAllColis')({
  colisDb,
  filterValidation
});
const getColisCountUsecase = require('../../../../use-case/colis/getColisCount')({
  colisDb,
  filterValidation
});
const getColisUsecase = require('../../../../use-case/colis/getColis')({
  colisDb,
  filterValidation
});
const updateColisUsecase = require('../../../../use-case/colis/updateColis')({
  colisDb,
  updateValidation 
});
const partialUpdateColisUsecase = require('../../../../use-case/colis/partialUpdateColis')({ colisDb });
const softDeleteColisUsecase = require('../../../../use-case/colis/softDeleteColis')({ colisDb });
const softDeleteManyColisUsecase = require('../../../../use-case/colis/softDeleteManyColis')({ colisDb });
const bulkInsertColisUsecase = require('../../../../use-case/colis/bulkInsertColis')({ colisDb });
const bulkUpdateColisUsecase = require('../../../../use-case/colis/bulkUpdateColis')({ colisDb });
const deleteColisUsecase = require('../../../../use-case/colis/deleteColis')({ colisDb });
const deleteManyColisUsecase = require('../../../../use-case/colis/deleteManyColis')({ colisDb });

const colisController = require('./colis');

const addColis = colisController.addColis(addColisUsecase);
const findAllColis = colisController.findAllColis(findAllColisUsecase);
const getColisCount = colisController.getColisCount(getColisCountUsecase);
const getColisById = colisController.getColis(getColisUsecase);
const updateColis = colisController.updateColis(updateColisUsecase);
const partialUpdateColis = colisController.partialUpdateColis(partialUpdateColisUsecase);
const softDeleteColis = colisController.softDeleteColis(softDeleteColisUsecase);
const softDeleteManyColis = colisController.softDeleteManyColis(softDeleteManyColisUsecase);
const bulkInsertColis = colisController.bulkInsertColis(bulkInsertColisUsecase);
const bulkUpdateColis = colisController.bulkUpdateColis(bulkUpdateColisUsecase);
const deleteColis = colisController.deleteColis(deleteColisUsecase);
const deleteManyColis = colisController.deleteManyColis(deleteManyColisUsecase);

module.exports = {
  addColis,
  findAllColis,
  getColisCount,
  getColisById,
  updateColis,
  partialUpdateColis,
  softDeleteColis,
  softDeleteManyColis,
  bulkInsertColis,
  bulkUpdateColis,
  deleteColis,
  deleteManyColis,
};