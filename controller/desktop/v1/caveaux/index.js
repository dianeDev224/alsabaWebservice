const caveauxDb = require('../../../../data-access/caveauxDb');

const caveauxSchema = require('../../../../validation/schema/caveaux');

const createValidation = require('../../../../validation')(caveauxSchema.createSchema);
const updateValidation = require('../../../../validation')(caveauxSchema.updateSchema);
const filterValidation = require('../../../../validation')(caveauxSchema.filterValidationSchema);
const addCaveauxUsecase = require('../../../../use-case/caveaux/addCaveaux')({
  caveauxDb,
  createValidation 
});
const findAllCaveauxUsecase = require('../../../../use-case/caveaux/findAllCaveaux')({
  caveauxDb,
  filterValidation
});
const getCaveauxCountUsecase = require('../../../../use-case/caveaux/getCaveauxCount')({
  caveauxDb,
  filterValidation
});
const getCaveauxUsecase = require('../../../../use-case/caveaux/getCaveaux')({
  caveauxDb,
  filterValidation
});
const updateCaveauxUsecase = require('../../../../use-case/caveaux/updateCaveaux')({
  caveauxDb,
  updateValidation 
});
const partialUpdateCaveauxUsecase = require('../../../../use-case/caveaux/partialUpdateCaveaux')({ caveauxDb });
const softDeleteCaveauxUsecase = require('../../../../use-case/caveaux/softDeleteCaveaux')({ caveauxDb });
const softDeleteManyCaveauxUsecase = require('../../../../use-case/caveaux/softDeleteManyCaveaux')({ caveauxDb });
const bulkInsertCaveauxUsecase = require('../../../../use-case/caveaux/bulkInsertCaveaux')({ caveauxDb });
const bulkUpdateCaveauxUsecase = require('../../../../use-case/caveaux/bulkUpdateCaveaux')({ caveauxDb });
const deleteCaveauxUsecase = require('../../../../use-case/caveaux/deleteCaveaux')({ caveauxDb });
const deleteManyCaveauxUsecase = require('../../../../use-case/caveaux/deleteManyCaveaux')({ caveauxDb });

const caveauxController = require('./caveaux');

const addCaveaux = caveauxController.addCaveaux(addCaveauxUsecase);
const findAllCaveaux = caveauxController.findAllCaveaux(findAllCaveauxUsecase);
const getCaveauxCount = caveauxController.getCaveauxCount(getCaveauxCountUsecase);
const getCaveauxById = caveauxController.getCaveaux(getCaveauxUsecase);
const updateCaveaux = caveauxController.updateCaveaux(updateCaveauxUsecase);
const partialUpdateCaveaux = caveauxController.partialUpdateCaveaux(partialUpdateCaveauxUsecase);
const softDeleteCaveaux = caveauxController.softDeleteCaveaux(softDeleteCaveauxUsecase);
const softDeleteManyCaveaux = caveauxController.softDeleteManyCaveaux(softDeleteManyCaveauxUsecase);
const bulkInsertCaveaux = caveauxController.bulkInsertCaveaux(bulkInsertCaveauxUsecase);
const bulkUpdateCaveaux = caveauxController.bulkUpdateCaveaux(bulkUpdateCaveauxUsecase);
const deleteCaveaux = caveauxController.deleteCaveaux(deleteCaveauxUsecase);
const deleteManyCaveaux = caveauxController.deleteManyCaveaux(deleteManyCaveauxUsecase);

module.exports = {
  addCaveaux,
  findAllCaveaux,
  getCaveauxCount,
  getCaveauxById,
  updateCaveaux,
  partialUpdateCaveaux,
  softDeleteCaveaux,
  softDeleteManyCaveaux,
  bulkInsertCaveaux,
  bulkUpdateCaveaux,
  deleteCaveaux,
  deleteManyCaveaux,
};