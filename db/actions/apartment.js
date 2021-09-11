const { ApartmentsSchema } = require('../models/apartment');
const { inbetweenDates } = require('../../functions/dates');
const crypto = require('crypto');

const saveApartment = async (data) => {
  const { apartment: apartmentData, host } = data;
  // create apartment id
  const apartmentId = crypto.randomBytes(10).toString('hex');
  // create apartment
  const apartment = await new ApartmentsSchema({
    apartmentId,
    ...apartmentData,
    host: { id: host.hostId, name: host.hostName },
  });
  return await apartment.save();
};

const getApartmentsInitialSearch = async (searchOptions) => {
  const { location, checkIn, checkOut, persons } = searchOptions;

  // get apartments with this location
  const apartments = await ApartmentsSchema.find({
    location: location,
  })
    .where('capacity')
    .gte(persons)
    .exec();

  // get dates from checkin checkout range
  const searchDates = inbetweenDates(checkIn, checkOut);

  // build apartments list for response
  const apartmentsResults = new Array();

  for (const apartment of apartments) {
    // flag for availability of this apartment
    let apartmentIsAvailable = true;
    for (const date of searchDates) {
      if (!apartment.availableDates.includes(date)) {
        // apartment not available in one (at least) of the searched dates
        apartmentIsAvailable = !apartmentIsAvailable;
        break;
      }
    }
    // apartment is available for all the dates provided
    if (apartmentIsAvailable) apartmentsResults.push(apartment);
  }
  return apartmentsResults;
};

module.exports = { saveApartment, getApartmentsInitialSearch };
