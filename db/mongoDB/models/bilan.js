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
  isDeleted: { type:Boolean },
  createdAt: { type:Date },
  updatedAt: { type:Date },
  isActive: { type:Boolean },
  benefice: { type:Number },
  gain: { type:Number },
  capitalPropre: { type:Number },
  chargeFictive: { type:Number },
  chargeReelle: { type:Number },
  Dettes: { type:Number },
  Disponibiite: { type:Number },
  entre: { type:Number },
  sortie: { type:Number },
  epargne: { type:Number },
  initiale: { type:Number },
  injection: { type:Number },
  pret: { type:Number },
  solde: { type:Number }
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

const bilan = mongoose.model('bilan',schema);
module.exports = bilan;
