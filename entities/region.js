module.exports = (region) => {

  let newRegion = { 
    isDeleted: region.isDeleted,
    regionName: region.regionName,
    country: region.country,
  };

  // remove undefined values
  Object.keys(newRegion).forEach(key => newRegion[key] === undefined && delete newRegion[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newRegion) => {
   *   if (!newRegion.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newRegion) 
   */

  return Object.freeze(newRegion);
};
