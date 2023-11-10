module.exports = (caveaux) => {

  let newCaveaux = { 
    isDeleted: caveaux.isDeleted,
    caveauxName: caveaux.caveauxName,
    caveauxSolde: caveaux.caveauxSolde,
    agence: caveaux.agence,
    createdAt: caveaux.createdAt,
    updatedAt: caveaux.updatedAt,
    isActive: caveaux.isActive,
  };

  // remove undefined values
  Object.keys(newCaveaux).forEach(key => newCaveaux[key] === undefined && delete newCaveaux[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCaveaux) => {
   *   if (!newCaveaux.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCaveaux) 
   */

  return Object.freeze(newCaveaux);
};
