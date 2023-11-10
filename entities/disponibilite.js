module.exports = (disponibilite) => {

  let newDisponibilite = { 
    isDeleted: disponibilite.isDeleted,
    updateAt: disponibilite.updateAt,
    createdAt: disponibilite.createdAt,
    startTime: disponibilite.startTime,
    endTime: disponibilite.endTime,
    available: disponibilite.available,
  };

  // remove undefined values
  Object.keys(newDisponibilite).forEach(key => newDisponibilite[key] === undefined && delete newDisponibilite[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newDisponibilite) => {
   *   if (!newDisponibilite.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newDisponibilite) 
   */

  return Object.freeze(newDisponibilite);
};
