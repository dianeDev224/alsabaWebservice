const response = require('../../utils/response');

const getDependencyCount = ({
  countryDb,colisDb,regionDb
})=> async (filter) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const colisFilter = { '$or': [{ fromCountry : { '$in' : countryIds } },{ toCountry : { '$in' : countryIds } }] };
    const colisCnt =  await colisDb.count(colisFilter);

    const regionFilter = { '$or': [{ country : { '$in' : countryIds } }] };
    const regionCnt =  await regionDb.count(regionFilter);
    let result = {
      colis :colisCnt ,
      region :regionCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  country : 0 }
    });
  }
};

const deleteWithDependency = ({
  countryDb,colisDb,regionDb
})=> async (filter) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const colisFilter = { '$or': [{ fromCountry : { '$in' : countryIds } },{ toCountry : { '$in' : countryIds } }] };
    const colisCnt =  (await colisDb.deleteMany(colisFilter));

    const regionFilter = { '$or': [{ country : { '$in' : countryIds } }] };
    const regionCnt =  (await regionDb.deleteMany(regionFilter));
    let deleted = (await countryDb.deleteMany(filter));
    let result = {
      colis :colisCnt ,
      region :regionCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  countryDb,colisDb,regionDb
}) => async (filter,updateBody) =>{
  let country = await countryDb.findMany(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const colisFilter = { '$or': [{ fromCountry : { '$in' : countryIds } },{ toCountry : { '$in' : countryIds } }] };
    const colisCnt =  (await colisDb.updateMany(colisFilter,updateBody));

    const regionFilter = { '$or': [{ country : { '$in' : countryIds } }] };
    const regionCnt =  (await regionDb.updateMany(regionFilter,updateBody));
    let updated = (await countryDb.updateMany(filter,updateBody));
    let result = {
      colis :colisCnt ,
      region :regionCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
