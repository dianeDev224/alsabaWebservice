module.exports = (colis) => {

  let newColis = { 
    isDeleted: colis.isDeleted,
    createdAt: colis.createdAt,
    publishedBy: colis.publishedBy,
    isClosed: colis.isClosed,
    closedAt: colis.closedAt,
    fromCountry: colis.fromCountry,
    toCountry: colis.toCountry,
    leavingAt: colis.leavingAt,
    arrivingAt: colis.arrivingAt,
    availableWeight: colis.availableWeight,
    takedBy: colis.takedBy,
  };

  // remove undefined values
  Object.keys(newColis).forEach(key => newColis[key] === undefined && delete newColis[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newColis) => {
   *   if (!newColis.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newColis) 
   */

  return Object.freeze(newColis);
};
