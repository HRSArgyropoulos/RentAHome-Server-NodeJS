const { ApartmentsSchema } = require('../models/apartment');

const saveApartment = async (doc) => {
  // create apartment
  const apartment = await new ApartmentsSchema(doc);
  return await apartment.save();
};

const getApartmentsInitialSearch = async (location) => {
  return await ApartmentsSchema.find({
    'location.title': location,
  }).exec();
};

module.exports = { saveApartment, getApartmentsInitialSearch };
