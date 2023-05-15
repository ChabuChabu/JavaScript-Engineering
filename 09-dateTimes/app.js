//date and times

const now = new Date();
console.log(now);
console.log(typeof now);

// years,month,day and time

console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth());
console.log("getDay", now.getDate());
console.log("getHours", now.getHours());

//timestamps

console.log("Timestamp:", now.getTime());

//date string
console.log(now.toDateString());
console.log(now.toLocaleString());
