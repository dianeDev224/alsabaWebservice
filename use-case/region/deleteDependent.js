const response = require('../../utils/response');

const getDependencyCount = ({
  regionDb,cityDb
})=> async (filter) =>{
  let region = await regionDb.findMany(filter);
  if (region.length){
    let regionIds = region.map((obj) => obj.id);

    const cityFilter = { '$or': [{ region : { '$in' : regionIds } }] };
    const cityCnt =  await cityDb.count(cityFilter);
    let result = { city :cityCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  region : 0 }
    });
  }
};

const deleteWithDependency = ({
  regionDb,cityDb
})=> async (filter) =>{
  let region = await regionDb.findMany(filter);
  if (region.length){
    let regionIds = region.map((obj) => obj.id);

    const cityFilter = { '$or': [{ region : { '$in' : regionIds } }] };
    const cityCnt =  (await cityDb.deleteMany(cityFilter));
    let deleted = (await regionDb.deleteMany(filter));
    let result = { city :cityCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  region : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  regionDb,cityDb
}) => async (filter,updateBody) =>{
  let region = await regionDb.findMany(filter);
  if (region.length){
    let regionIds = region.map((obj) => obj.id);

    const cityFilter = { '$or': [{ region : { '$in' : regionIds } }] };
    const cityCnt =  (await cityDb.updateMany(cityFilter,updateBody));
    let updated = (await regionDb.updateMany(filter,updateBody));
    let result = { city :cityCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  region : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
