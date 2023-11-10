let Chat_group = require('../db/mongoDB/models/Chat_group');
let { 
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
} = require('../db/mongoDB/dbService')(Chat_group);

module.exports = {
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
};