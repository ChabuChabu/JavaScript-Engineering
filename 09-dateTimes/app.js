/***********************  Time introduction *******************/

// const now = new Date();
// console.log(now);
// console.log(typeof now);

// years,month,day and time

// console.log("getFullYear", now.getFullYear());
// console.log("getMonth", now.getMonth());
// console.log("getDay", now.getDate());
// console.log("getHours", now.getHours());

//timestamps

//date string
// console.log(now.toDateString());
// console.log(now.toLocaleString());

/***********************  Timestamps ************************/

// const before = new Date("February 1 2019 7:30:59");
// const now = new Date();

// console.log(now.getTime(), before.getTime());
// const diff = now.getTime() - before.getTime();
// console.log(diff);

//seconds
// const mins = Math.round(diff / 1000 / 60);
// console.log(mins);

//hours
// const hours = Math.round(mins / 60);
// console.log(hours);

//days
// const days = Math.round(hours / 24);
// console.log(days);

// console.log(`The blog was written ${days} ago!`);

//convering timestaps into date objects

// const timestamp = 1675938474990;

// console.log(new Date(timestamp));

/***********************  Digital Clock ************************/

const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
      <span>${h}</span> :
      <span>${m}</span> :
      <span>${s}</span> 
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
