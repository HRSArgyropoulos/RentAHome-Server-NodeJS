const inbetweenDates = (checkIn, checkOut) => {
  // construct dates to search for available dates (very bad way -- not the point here --)
  const searchDates = new Array();

  // get (YYYY-MM-)DD aka except the last 2 chars
  const datePrefix = checkIn.slice(0, -2);

  for (
    let index = checkIn.slice(-2) * 1;
    index <= checkOut.slice(-2) * 1;
    index++
  ) {
    const constructDate =
      datePrefix + (index < 10 ? '0' : '') + index;
    searchDates.push(constructDate);
  }

  return searchDates;
};

module.exports = { inbetweenDates };
