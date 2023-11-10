/**
 *findAllQrcode.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Qrcode(s). {status, message, data}
 */
const findAllQrcode = ({
  qrcodeDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await qrcodeDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundQrcode = await qrcodeDb.paginate(query,options);
    if (!foundQrcode){
      return response.recordNotFound();
    }
    return response.success({ data:foundQrcode });  
  }
        
};
module.exports = findAllQrcode;