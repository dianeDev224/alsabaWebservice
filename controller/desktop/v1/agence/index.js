const agenceDb = require('../../../../data-access/agenceDb');
const Chat_messageDb = require('../../../../data-access/Chat_messageDb');
const Chat_groupDb = require('../../../../data-access/Chat_groupDb');
const retraitDb = require('../../../../data-access/retraitDb');
const depotDb = require('../../../../data-access/depotDb');
const caisseDb = require('../../../../data-access/caisseDb');
const caveauxDb = require('../../../../data-access/caveauxDb');
const transfertDb = require('../../../../data-access/transfertDb');

const agenceSchema = require('../../../../validation/schema/agence');

const createValidation = require('../../../../validation')(agenceSchema.createSchema);
const updateValidation = require('../../../../validation')(agenceSchema.updateSchema);
const filterValidation = require('../../../../validation')(agenceSchema.filterValidationSchema);
const addAgenceUsecase = require('../../../../use-case/agence/addAgence')({
  agenceDb,
  createValidation 
});
const findAllAgenceUsecase = require('../../../../use-case/agence/findAllAgence')({
  agenceDb,
  filterValidation
});
const getAgenceCountUsecase = require('../../../../use-case/agence/getAgenceCount')({
  agenceDb,
  filterValidation
});
const getAgenceUsecase = require('../../../../use-case/agence/getAgence')({
  agenceDb,
  filterValidation
});
const updateAgenceUsecase = require('../../../../use-case/agence/updateAgence')({
  agenceDb,
  updateValidation 
});
const partialUpdateAgenceUsecase = require('../../../../use-case/agence/partialUpdateAgence')({ agenceDb });
const softDeleteAgenceUsecase = require('../../../../use-case/agence/softDeleteAgence')({
  agenceDb,
  Chat_messageDb,
  Chat_groupDb,
  retraitDb,
  depotDb,
  caisseDb,
  caveauxDb,
  transfertDb
});
const softDeleteManyAgenceUsecase = require('../../../../use-case/agence/softDeleteManyAgence')({
  agenceDb,
  Chat_messageDb,
  Chat_groupDb,
  retraitDb,
  depotDb,
  caisseDb,
  caveauxDb,
  transfertDb
});
const bulkInsertAgenceUsecase = require('../../../../use-case/agence/bulkInsertAgence')({ agenceDb });
const bulkUpdateAgenceUsecase = require('../../../../use-case/agence/bulkUpdateAgence')({ agenceDb });
const deleteAgenceUsecase = require('../../../../use-case/agence/deleteAgence')({
  agenceDb,
  Chat_messageDb,
  Chat_groupDb,
  retraitDb,
  depotDb,
  caisseDb,
  caveauxDb,
  transfertDb
});
const deleteManyAgenceUsecase = require('../../../../use-case/agence/deleteManyAgence')({
  agenceDb,
  Chat_messageDb,
  Chat_groupDb,
  retraitDb,
  depotDb,
  caisseDb,
  caveauxDb,
  transfertDb
});

const agenceController = require('./agence');

const addAgence = agenceController.addAgence(addAgenceUsecase);
const findAllAgence = agenceController.findAllAgence(findAllAgenceUsecase);
const getAgenceCount = agenceController.getAgenceCount(getAgenceCountUsecase);
const getAgenceById = agenceController.getAgence(getAgenceUsecase);
const updateAgence = agenceController.updateAgence(updateAgenceUsecase);
const partialUpdateAgence = agenceController.partialUpdateAgence(partialUpdateAgenceUsecase);
const softDeleteAgence = agenceController.softDeleteAgence(softDeleteAgenceUsecase);
const softDeleteManyAgence = agenceController.softDeleteManyAgence(softDeleteManyAgenceUsecase);
const bulkInsertAgence = agenceController.bulkInsertAgence(bulkInsertAgenceUsecase);
const bulkUpdateAgence = agenceController.bulkUpdateAgence(bulkUpdateAgenceUsecase);
const deleteAgence = agenceController.deleteAgence(deleteAgenceUsecase);
const deleteManyAgence = agenceController.deleteManyAgence(deleteManyAgenceUsecase);

module.exports = {
  addAgence,
  findAllAgence,
  getAgenceCount,
  getAgenceById,
  updateAgence,
  partialUpdateAgence,
  softDeleteAgence,
  softDeleteManyAgence,
  bulkInsertAgence,
  bulkUpdateAgence,
  deleteAgence,
  deleteManyAgence,
};