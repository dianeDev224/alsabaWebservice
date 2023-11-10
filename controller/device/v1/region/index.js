const regionDb = require('../../../../data-access/regionDb');
const cityDb = require('../../../../data-access/cityDb');

const regionSchema = require('../../../../validation/schema/region');

const createValidation = require('../../../../validation')(regionSchema.createSchema);
const updateValidation = require('../../../../validation')(regionSchema.updateSchema);
const filterValidation = require('../../../../validation')(regionSchema.filterValidationSchema);
const addRegionUsecase = require('../../../../use-case/region/addRegion')({
  regionDb,
  createValidation 
});
const findAllRegionUsecase = require('../../../../use-case/region/findAllRegion')({
  regionDb,
  filterValidation
});
const getRegionCountUsecase = require('../../../../use-case/region/getRegionCount')({
  regionDb,
  filterValidation
});
const getRegionUsecase = require('../../../../use-case/region/getRegion')({
  regionDb,
  filterValidation
});
const updateRegionUsecase = require('../../../../use-case/region/updateRegion')({
  regionDb,
  updateValidation 
});
const partialUpdateRegionUsecase = require('../../../../use-case/region/partialUpdateRegion')({ regionDb });
const softDeleteRegionUsecase = require('../../../../use-case/region/softDeleteRegion')({
  regionDb,
  cityDb
});
const softDeleteManyRegionUsecase = require('../../../../use-case/region/softDeleteManyRegion')({
  regionDb,
  cityDb
});
const bulkInsertRegionUsecase = require('../../../../use-case/region/bulkInsertRegion')({ regionDb });
const bulkUpdateRegionUsecase = require('../../../../use-case/region/bulkUpdateRegion')({ regionDb });
const deleteRegionUsecase = require('../../../../use-case/region/deleteRegion')({
  regionDb,
  cityDb
});
const deleteManyRegionUsecase = require('../../../../use-case/region/deleteManyRegion')({
  regionDb,
  cityDb
});

const regionController = require('./region');

const addRegion = regionController.addRegion(addRegionUsecase);
const findAllRegion = regionController.findAllRegion(findAllRegionUsecase);
const getRegionCount = regionController.getRegionCount(getRegionCountUsecase);
const getRegionById = regionController.getRegion(getRegionUsecase);
const updateRegion = regionController.updateRegion(updateRegionUsecase);
const partialUpdateRegion = regionController.partialUpdateRegion(partialUpdateRegionUsecase);
const softDeleteRegion = regionController.softDeleteRegion(softDeleteRegionUsecase);
const softDeleteManyRegion = regionController.softDeleteManyRegion(softDeleteManyRegionUsecase);
const bulkInsertRegion = regionController.bulkInsertRegion(bulkInsertRegionUsecase);
const bulkUpdateRegion = regionController.bulkUpdateRegion(bulkUpdateRegionUsecase);
const deleteRegion = regionController.deleteRegion(deleteRegionUsecase);
const deleteManyRegion = regionController.deleteManyRegion(deleteManyRegionUsecase);

module.exports = {
  addRegion,
  findAllRegion,
  getRegionCount,
  getRegionById,
  updateRegion,
  partialUpdateRegion,
  softDeleteRegion,
  softDeleteManyRegion,
  bulkInsertRegion,
  bulkUpdateRegion,
  deleteRegion,
  deleteManyRegion,
};