let mongoose = require('../connection.js');
const mongoosePaginate = require('mongoose-paginate-v2');
const idValidator = require('mongoose-id-validator');

const modelCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: modelCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema({
  name: {
    type:String,
    required:true
  },
  code: {
    type:String,
    required:true
  },
  admin: {
    type:Schema.Types.ObjectId,
    required:true,
    ref:'agence'
  },
  member: { type:Array },
  isActive: { type:Boolean },
  createdAt: { type:Date },
  updatedAt: { type:Date },
  updatedBy: {
    type:Schema.Types.ObjectId,
    ref:'user'
  },
  addedBy: {
    type:Schema.Types.ObjectId,
    ref:'user'
  },
  isDeleted: { type:Boolean }
}
);
schema.pre('save', async function (next) {
  this.isDeleted = false;
  next();
});
schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length){
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
    }
  }
  next();
});

schema.method('toJSON', function () {
  const {
    _id, __v, ...object 
  } = this.toObject({ virtuals: true });
  object.id = _id;
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const Chat_group = mongoose.model('Chat_group',schema);
module.exports = Chat_group;
