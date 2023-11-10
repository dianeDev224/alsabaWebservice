let mongoose = require('../connection.js');
const mongoosePaginate = require('mongoose-paginate-v2');
const idValidator = require('mongoose-id-validator');
const OperationsEnum = require('../../../constants/Operations');

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
  isDeleted: { type:Boolean },
  mal: { type:Number },
  sender: {
    ref:'agence',
    type:Schema.Types.ObjectId
  },
  receiver: {
    ref:'agence',
    type:Schema.Types.ObjectId
  },
  isValidated: { type:Boolean },
  fraisPartenaire: { type:Number },
  partenaire: {
    type:Schema.Types.ObjectId,
    ref:'partenaire'
  },
  isCanceled: { type:Boolean },
  updatedAt: { type:Date },
  canceledAt: { type:Date },
  deletedAt: { type:Date },
  type: { type:String },
  receiverCity: {
    ref:'city',
    type:Schema.Types.ObjectId
  }
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

const transfert = mongoose.model('transfert',schema);
module.exports = transfert;
