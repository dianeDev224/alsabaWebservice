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
  typeCaisse: { type:Number },
  caisseSolde: { type:Number },
  caisseEmitter: {
    ref:'agence',
    type:Schema.Types.ObjectId
  },
  caisserReceiver: {
    ref:'agence',
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

const caisse = mongoose.model('caisse',schema);
module.exports = caisse;
