const partenaireDb = require('../../../../data-access/partenaireDb');
const transfertDb = require('../../../../data-access/transfertDb');

const partenaireSchema = require('../../../../validation/schema/partenaire');

const createValidation = require('../../../../validation')(partenaireSchema.createSchema);
const updateValidation = require('../../../../validation')(partenaireSchema.updateSchema);
const filterValidation = require('../../../../validation')(partenaireSchema.filterValidationSchema);
const addPartenaireUsecase = require('../../../../use-case/partenaire/addPartenaire')({
  partenaireDb,
  createValidation 
});
const findAllPartenaireUsecase = require('../../../../use-case/partenaire/findAllPartenaire')({
  partenaireDb,
  filterValidation
});
const getPartenaireCountUsecase = require('../../../../use-case/partenaire/getPartenaireCount')({
  partenaireDb,
  filterValidation
});
const getPartenaireUsecase = require('../../../../use-case/partenaire/getPartenaire')({
  partenaireDb,
  filterValidation
});
const updatePartenaireUsecase = require('../../../../use-case/partenaire/updatePartenaire')({
  partenaireDb,
  updateValidation 
});
const partialUpdatePartenaireUsecase = require('../../../../use-case/partenaire/partialUpdatePartenaire')({ partenaireDb });
const softDeletePartenaireUsecase = require('../../../../use-case/partenaire/softDeletePartenaire')({
  partenaireDb,
  transfertDb
});
const softDeleteManyPartenaireUsecase = require('../../../../use-case/partenaire/softDeleteManyPartenaire')({
  partenaireDb,
  transfertDb
});
const bulkInsertPartenaireUsecase = require('../../../../use-case/partenaire/bulkInsertPartenaire')({ partenaireDb });
const bulkUpdatePartenaireUsecase = require('../../../../use-case/partenaire/bulkUpdatePartenaire')({ partenaireDb });
const deletePartenaireUsecase = require('../../../../use-case/partenaire/deletePartenaire')({
  partenaireDb,
  transfertDb
});
const deleteManyPartenaireUsecase = require('../../../../use-case/partenaire/deleteManyPartenaire')({
  partenaireDb,
  transfertDb
});

const partenaireController = require('./partenaire');

const addPartenaire = partenaireController.addPartenaire(addPartenaireUsecase);
const findAllPartenaire = partenaireController.findAllPartenaire(findAllPartenaireUsecase);
const getPartenaireCount = partenaireController.getPartenaireCount(getPartenaireCountUsecase);
const getPartenaireById = partenaireController.getPartenaire(getPartenaireUsecase);
const updatePartenaire = partenaireController.updatePartenaire(updatePartenaireUsecase);
const partialUpdatePartenaire = partenaireController.partialUpdatePartenaire(partialUpdatePartenaireUsecase);
const softDeletePartenaire = partenaireController.softDeletePartenaire(softDeletePartenaireUsecase);
const softDeleteManyPartenaire = partenaireController.softDeleteManyPartenaire(softDeleteManyPartenaireUsecase);
const bulkInsertPartenaire = partenaireController.bulkInsertPartenaire(bulkInsertPartenaireUsecase);
const bulkUpdatePartenaire = partenaireController.bulkUpdatePartenaire(bulkUpdatePartenaireUsecase);
const deletePartenaire = partenaireController.deletePartenaire(deletePartenaireUsecase);
const deleteManyPartenaire = partenaireController.deleteManyPartenaire(deleteManyPartenaireUsecase);

module.exports = {
  addPartenaire,
  findAllPartenaire,
  getPartenaireCount,
  getPartenaireById,
  updatePartenaire,
  partialUpdatePartenaire,
  softDeletePartenaire,
  softDeleteManyPartenaire,
  bulkInsertPartenaire,
  bulkUpdatePartenaire,
  deletePartenaire,
  deleteManyPartenaire,
};