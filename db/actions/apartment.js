const { ApartmentsSchema } = require('../models/apartment');

const saveApartment = async (doc) => {
  // create apartment
  const apartment = await new ApartmentsSchema(doc);
  return await apartment.save();
};

module.exports = { saveApartment };
