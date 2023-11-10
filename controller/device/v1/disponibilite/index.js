const disponibiliteDb = require('../../../../data-access/disponibiliteDb');

const disponibiliteSchema = require('../../../../validation/schema/disponibilite');

const createValidation = require('../../../../validation')(disponibiliteSchema.createSchema);
const updateValidation = require('../../../../validation')(disponibiliteSchema.updateSchema);
const filterValidation = require('../../../../validation')(disponibiliteSchema.filterValidationSchema);
const addDisponibiliteUsecase = require('../../../../use-case/disponibilite/addDisponibilite')({
  disponibiliteDb,
  createValidation 
});
const findAllDisponibiliteUsecase = require('../../../../use-case/disponibilite/findAllDisponibilite')({
  disponibiliteDb,
  filterValidation
});
const getDisponibiliteCountUsecase = require('../../../../use-case/disponibilite/getDisponibiliteCount')({
  disponibiliteDb,
  filterValidation
});
const getDisponibiliteUsecase = require('../../../../use-case/disponibilite/getDisponibilite')({
  disponibiliteDb,
  filterValidation
});
const updateDisponibiliteUsecase = require('../../../../use-case/disponibilite/updateDisponibilite')({
  disponibiliteDb,
  updateValidation 
});
const partialUpdateDisponibiliteUsecase = require('../../../../use-case/disponibilite/partialUpdateDisponibilite')({ disponibiliteDb });
const softDeleteDisponibiliteUsecase = require('../../../../use-case/disponibilite/softDeleteDisponibilite')({ disponibiliteDb });
const softDeleteManyDisponibiliteUsecase = require('../../../../use-case/disponibilite/softDeleteManyDisponibilite')({ disponibiliteDb });
const bulkInsertDisponibiliteUsecase = require('../../../../use-case/disponibilite/bulkInsertDisponibilite')({ disponibiliteDb });
const bulkUpdateDisponibiliteUsecase = require('../../../../use-case/disponibilite/bulkUpdateDisponibilite')({ disponibiliteDb });
const deleteDisponibiliteUsecase = require('../../../../use-case/disponibilite/deleteDisponibilite')({ disponibiliteDb });
const deleteManyDisponibiliteUsecase = require('../../../../use-case/disponibilite/deleteManyDisponibilite')({ disponibiliteDb });

const disponibiliteController = require('./disponibilite');

const addDisponibilite = disponibiliteController.addDisponibilite(addDisponibiliteUsecase);
const findAllDisponibilite = disponibiliteController.findAllDisponibilite(findAllDisponibiliteUsecase);
const getDisponibiliteCount = disponibiliteController.getDisponibiliteCount(getDisponibiliteCountUsecase);
const getDisponibiliteById = disponibiliteController.getDisponibilite(getDisponibiliteUsecase);
const updateDisponibilite = disponibiliteController.updateDisponibilite(updateDisponibiliteUsecase);
const partialUpdateDisponibilite = disponibiliteController.partialUpdateDisponibilite(partialUpdateDisponibiliteUsecase);
const softDeleteDisponibilite = disponibiliteController.softDeleteDisponibilite(softDeleteDisponibiliteUsecase);
const softDeleteManyDisponibilite = disponibiliteController.softDeleteManyDisponibilite(softDeleteManyDisponibiliteUsecase);
const bulkInsertDisponibilite = disponibiliteController.bulkInsertDisponibilite(bulkInsertDisponibiliteUsecase);
const bulkUpdateDisponibilite = disponibiliteController.bulkUpdateDisponibilite(bulkUpdateDisponibiliteUsecase);
const deleteDisponibilite = disponibiliteController.deleteDisponibilite(deleteDisponibiliteUsecase);
const deleteManyDisponibilite = disponibiliteController.deleteManyDisponibilite(deleteManyDisponibiliteUsecase);

module.exports = {
  addDisponibilite,
  findAllDisponibilite,
  getDisponibiliteCount,
  getDisponibiliteById,
  updateDisponibilite,
  partialUpdateDisponibilite,
  softDeleteDisponibilite,
  softDeleteManyDisponibilite,
  bulkInsertDisponibilite,
  bulkUpdateDisponibilite,
  deleteDisponibilite,
  deleteManyDisponibilite,
};