const qrcodeDb = require('../../../../data-access/qrcodeDb');

const qrcodeSchema = require('../../../../validation/schema/qrcode');

const createValidation = require('../../../../validation')(qrcodeSchema.createSchema);
const updateValidation = require('../../../../validation')(qrcodeSchema.updateSchema);
const filterValidation = require('../../../../validation')(qrcodeSchema.filterValidationSchema);
const addQrcodeUsecase = require('../../../../use-case/qrcode/addQrcode')({
  qrcodeDb,
  createValidation 
});
const findAllQrcodeUsecase = require('../../../../use-case/qrcode/findAllQrcode')({
  qrcodeDb,
  filterValidation
});
const getQrcodeCountUsecase = require('../../../../use-case/qrcode/getQrcodeCount')({
  qrcodeDb,
  filterValidation
});
const getQrcodeUsecase = require('../../../../use-case/qrcode/getQrcode')({
  qrcodeDb,
  filterValidation
});
const updateQrcodeUsecase = require('../../../../use-case/qrcode/updateQrcode')({
  qrcodeDb,
  updateValidation 
});
const partialUpdateQrcodeUsecase = require('../../../../use-case/qrcode/partialUpdateQrcode')({ qrcodeDb });
const softDeleteQrcodeUsecase = require('../../../../use-case/qrcode/softDeleteQrcode')({ qrcodeDb });
const softDeleteManyQrcodeUsecase = require('../../../../use-case/qrcode/softDeleteManyQrcode')({ qrcodeDb });
const bulkInsertQrcodeUsecase = require('../../../../use-case/qrcode/bulkInsertQrcode')({ qrcodeDb });
const bulkUpdateQrcodeUsecase = require('../../../../use-case/qrcode/bulkUpdateQrcode')({ qrcodeDb });
const deleteQrcodeUsecase = require('../../../../use-case/qrcode/deleteQrcode')({ qrcodeDb });
const deleteManyQrcodeUsecase = require('../../../../use-case/qrcode/deleteManyQrcode')({ qrcodeDb });

const qrcodeController = require('./qrcode');

const addQrcode = qrcodeController.addQrcode(addQrcodeUsecase);
const findAllQrcode = qrcodeController.findAllQrcode(findAllQrcodeUsecase);
const getQrcodeCount = qrcodeController.getQrcodeCount(getQrcodeCountUsecase);
const getQrcodeById = qrcodeController.getQrcode(getQrcodeUsecase);
const updateQrcode = qrcodeController.updateQrcode(updateQrcodeUsecase);
const partialUpdateQrcode = qrcodeController.partialUpdateQrcode(partialUpdateQrcodeUsecase);
const softDeleteQrcode = qrcodeController.softDeleteQrcode(softDeleteQrcodeUsecase);
const softDeleteManyQrcode = qrcodeController.softDeleteManyQrcode(softDeleteManyQrcodeUsecase);
const bulkInsertQrcode = qrcodeController.bulkInsertQrcode(bulkInsertQrcodeUsecase);
const bulkUpdateQrcode = qrcodeController.bulkUpdateQrcode(bulkUpdateQrcodeUsecase);
const deleteQrcode = qrcodeController.deleteQrcode(deleteQrcodeUsecase);
const deleteManyQrcode = qrcodeController.deleteManyQrcode(deleteManyQrcodeUsecase);

module.exports = {
  addQrcode,
  findAllQrcode,
  getQrcodeCount,
  getQrcodeById,
  updateQrcode,
  partialUpdateQrcode,
  softDeleteQrcode,
  softDeleteManyQrcode,
  bulkInsertQrcode,
  bulkUpdateQrcode,
  deleteQrcode,
  deleteManyQrcode,
};