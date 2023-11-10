/**
 *addChat_group.js
 */

const  Chat_groupEntity = require('../../entities/Chat_group');
const response = require('../../utils/response');
/**
 * @description : create new record of Chat_group in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addChat_group = ({
  Chat_groupDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Chat_group = Chat_groupEntity(dataToCreate);
  Chat_group = await Chat_groupDb.create(Chat_group);
  return response.success({ data:Chat_group });
};
module.exports = addChat_group;