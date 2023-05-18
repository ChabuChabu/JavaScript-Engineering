const now = new Date();

// console.log(dateFns.isToday(now));

//formating options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd Do,MMMM,YYYY"));

//comparing dates

const timestamp = 1675938474990;

console.log(dateFns.distanceInWords(now, timestamp, { addSuffix: true }));

const before = new Date("February 1 2019 12:00:00");

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));