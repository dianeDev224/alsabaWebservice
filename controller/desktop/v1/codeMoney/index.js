const codeMoneyDb = require('../../../../data-access/codeMoneyDb');

const codeMoneySchema = require('../../../../validation/schema/codeMoney');

const createValidation = require('../../../../validation')(codeMoneySchema.createSchema);
const updateValidation = require('../../../../validation')(codeMoneySchema.updateSchema);
const filterValidation = require('../../../../validation')(codeMoneySchema.filterValidationSchema);
const addCodeMoneyUsecase = require('../../../../use-case/codeMoney/addCodeMoney')({
  codeMoneyDb,
  createValidation 
});
const findAllCodeMoneyUsecase = require('../../../../use-case/codeMoney/findAllCodeMoney')({
  codeMoneyDb,
  filterValidation
});
const getCodeMoneyCountUsecase = require('../../../../use-case/codeMoney/getCodeMoneyCount')({
  codeMoneyDb,
  filterValidation
});
const getCodeMoneyUsecase = require('../../../../use-case/codeMoney/getCodeMoney')({
  codeMoneyDb,
  filterValidation
});
const updateCodeMoneyUsecase = require('../../../../use-case/codeMoney/updateCodeMoney')({
  codeMoneyDb,
  updateValidation 
});
const partialUpdateCodeMoneyUsecase = require('../../../../use-case/codeMoney/partialUpdateCodeMoney')({ codeMoneyDb });
const softDeleteCodeMoneyUsecase = require('../../../../use-case/codeMoney/softDeleteCodeMoney')({ codeMoneyDb });
const softDeleteManyCodeMoneyUsecase = require('../../../../use-case/codeMoney/softDeleteManyCodeMoney')({ codeMoneyDb });
const bulkInsertCodeMoneyUsecase = require('../../../../use-case/codeMoney/bulkInsertCodeMoney')({ codeMoneyDb });
const bulkUpdateCodeMoneyUsecase = require('../../../../use-case/codeMoney/bulkUpdateCodeMoney')({ codeMoneyDb });
const deleteCodeMoneyUsecase = require('../../../../use-case/codeMoney/deleteCodeMoney')({ codeMoneyDb });
const deleteManyCodeMoneyUsecase = require('../../../../use-case/codeMoney/deleteManyCodeMoney')({ codeMoneyDb });

const codeMoneyController = require('./codeMoney');

const addCodeMoney = codeMoneyController.addCodeMoney(addCodeMoneyUsecase);
const findAllCodeMoney = codeMoneyController.findAllCodeMoney(findAllCodeMoneyUsecase);
const getCodeMoneyCount = codeMoneyController.getCodeMoneyCount(getCodeMoneyCountUsecase);
const getCodeMoneyById = codeMoneyController.getCodeMoney(getCodeMoneyUsecase);
const updateCodeMoney = codeMoneyController.updateCodeMoney(updateCodeMoneyUsecase);
const partialUpdateCodeMoney = codeMoneyController.partialUpdateCodeMoney(partialUpdateCodeMoneyUsecase);
const softDeleteCodeMoney = codeMoneyController.softDeleteCodeMoney(softDeleteCodeMoneyUsecase);
const softDeleteManyCodeMoney = codeMoneyController.softDeleteManyCodeMoney(softDeleteManyCodeMoneyUsecase);
const bulkInsertCodeMoney = codeMoneyController.bulkInsertCodeMoney(bulkInsertCodeMoneyUsecase);
const bulkUpdateCodeMoney = codeMoneyController.bulkUpdateCodeMoney(bulkUpdateCodeMoneyUsecase);
const deleteCodeMoney = codeMoneyController.deleteCodeMoney(deleteCodeMoneyUsecase);
const deleteManyCodeMoney = codeMoneyController.deleteManyCodeMoney(deleteManyCodeMoneyUsecase);

module.exports = {
  addCodeMoney,
  findAllCodeMoney,
  getCodeMoneyCount,
  getCodeMoneyById,
  updateCodeMoney,
  partialUpdateCodeMoney,
  softDeleteCodeMoney,
  softDeleteManyCodeMoney,
  bulkInsertCodeMoney,
  bulkUpdateCodeMoney,
  deleteCodeMoney,
  deleteManyCodeMoney,
};