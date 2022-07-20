'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// let seattle = {
//   name: 'Seattle',
//   cookiesPerhour: [],
//   cookiesTotal: 0,
//   custNum: [],
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   getRandomCustNum: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNum = randomCustNum(this.minCust, this.maxCust);
//       this.custNum.push(randomNum);
//     }
//   },
//   getRandomCookiesNum: function () {
//     this.getRandomCustNum();
//     for (let i = 0; i < hours.length; i++) {
//       let numCookies = Math.round(this.avgCookie * this.custNum[i]);
//       this.cookiesPerhour.push(numCookies);
//       this.cookiesTotal += numCookies;
//     }

//   },

//   render: function () {

//     let div = document.getElementById("seattle-sales");

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     div.appendChild(h2Elem);


//     let ulElem = document.createElement('ul');

//     for (let i = 0; i < seattle.cookiesPerhour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     };
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
//     ulElem.appendChild(liElem);

//     div.appendChild(ulElem);
//   },
// };
// seattle.getRandomCustNum();
// seattle.getRandomCookiesNum();
// console.log(seattle);
// seattle.render();




// let tokyo = {
//   name: 'Tokyo',
//   cookiesPerhour: [],
//   cookiesTotal: 0,
//   custNum: [],
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   getRandomCustNum: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNum = randomCustNum(this.minCust, this.maxCust);
//       this.custNum.push(randomNum);
//     }
//   },
//   getRandomCookiesNum: function () {
//     this.getRandomCustNum();
//     for (let i = 0; i < hours.length; i++) {
//       let numCookies = Math.round(this.avgCookie * this.custNum[i]);
//       this.cookiesPerhour.push(numCookies);
//       this.cookiesTotal += numCookies;
//     }

//   },

//   render: function () {

//     let div = document.getElementById("seattle-sales");

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     div.appendChild(h2Elem);


//     let ulElem = document.createElement('ul');

//     for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     };
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
//     ulElem.appendChild(liElem);

//     div.appendChild(ulElem);
//   },
// };
// tokyo.getRandomCustNum();
// tokyo.getRandomCookiesNum();
// console.log(tokyo);
// tokyo.render();





// let dubai = {
//   name: 'Dubai',
//   cookiesPerhour: [],
//   cookiesTotal: 0,
//   custNum: [],
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   getRandomCustNum: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNum = randomCustNum(this.minCust, this.maxCust);
//       this.custNum.push(randomNum);
//     }
//   },
//   getRandomCookiesNum: function () {
//     this.getRandomCustNum();
//     for (let i = 0; i < hours.length; i++) {
//       let numCookies = Math.round(this.avgCookie * this.custNum[i]);
//       this.cookiesPerhour.push(numCookies);
//       this.cookiesTotal += numCookies;
//     }

//   },

//   render: function () {

//     let div = document.getElementById("seattle-sales");

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     div.appendChild(h2Elem);


//     let ulElem = document.createElement('ul');

//     for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     };
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
//     ulElem.appendChild(liElem);

//     div.appendChild(ulElem);
//   },
// };
// dubai.getRandomCustNum();
// dubai.getRandomCookiesNum();
// console.log(dubai);
// dubai.render();






// let paris = {
//   name: 'Paris',
//   cookiesPerhour: [],
//   cookiesTotal: 0,
//   custNum: [],
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   getRandomCustNum: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNum = randomCustNum(this.minCust, this.maxCust);
//       this.custNum.push(randomNum);
//     }
//   },
//   getRandomCookiesNum: function () {
//     this.getRandomCustNum();
//     for (let i = 0; i < hours.length; i++) {
//       let numCookies = Math.round(this.avgCookie * this.custNum[i]);
//       this.cookiesPerhour.push(numCookies);
//       this.cookiesTotal += numCookies;
//     }

//   },

//   render: function () {

//     let div = document.getElementById("seattle-sales");

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     div.appendChild(h2Elem);


//     let ulElem = document.createElement('ul');

//     for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     };
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
//     ulElem.appendChild(liElem);

//     div.appendChild(ulElem);
//   },
// };
// paris.getRandomCustNum();
// paris.getRandomCookiesNum();
// console.log(paris);
// paris.render();





// let lima = {
//   name: 'Lima',
//   cookiesPerhour: [],
//   cookiesTotal: 0,
//   custNum: [],
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   getRandomCustNum: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNum = randomCustNum(this.minCust, this.maxCust);
//       this.custNum.push(randomNum);
//     }
//   },
//   getRandomCookiesNum: function () {
//     this.getRandomCustNum();
//     for (let i = 0; i < hours.length; i++) {
//       let numCookies = Math.round(this.avgCookie * this.custNum[i]);
//       this.cookiesPerhour.push(numCookies);
//       this.cookiesTotal += numCookies;
//     }

//   },

//   render: function () {

//     let div = document.getElementById("seattle-sales");

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     div.appendChild(h2Elem);


//     let ulElem = document.createElement('ul');

//     for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     };
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
//     ulElem.appendChild(liElem);

//     div.appendChild(ulElem);
//   }
// };
// lima.getRandomCustNum();
// lima.getRandomCookiesNum();
// console.log(lima);
// lima.render();




//*****************************LAB 7*************************************** */

let salesTable = document.getElementById('sales-table');

let cityInt = [];

function city(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  this.cookiesPerhour = [];
  this.cookiesTotal = 0;
  this.custNum = [];

  cityInt.push(this);
}

city.prototype.getRandomCookiesNum = function () {
  this.getRandomCustNum();
  for (let i = 0; i < hours.length; i++) {
    let numCookies = Math.round(this.avgCookie * this.custNum[i]);
    this.cookiesPerhour.push(numCookies);
    this.cookiesTotal += numCookies;
  }

},

  city.prototype.getRandomCustNum = function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },

  city.prototype.render = function () {

    let row = document.createElement('tr');
    salesTable.appendChild(row);

    let thElem = document.createElement('th');
    thElem.textContent = this.name;
    row.appendChild(thElem);

    // let ulElem = document.createElement('ul');


    for (let i = 0; i < this.cookiesPerhour.length; i++) {
      let td1Elem = document.createElement('td');
      td1Elem.textContent = this.cookiesPerhour[i];
      // thElem.textContent = `Total: ${this.cookiesTotal}`;
      row.appendChild(td1Elem);
    };

    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesTotal;
    row.appendChild(tdElem);

  };

function renderheader() {
  let row = document.createElement('tr');
  salesTable.appendChild(row);

  let thElem = document.createElement('th');
  thElem.textContent = '';
  row.appendChild(thElem);

  for (let i = 0; i < hours.length; i++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    row.appendChild(thElem);
  }

  thElem = document.createElement('th');
  thElem.textContent = 'Total';
  row.appendChild(thElem);
};



renderheader();

let seattle = new city('seattle', 23, 54, 6.3);
let tokyo = new city('tokyo', 3, 24, 1.2);
let dubai = new city('dubai', 11, 38, 3.7);
let paris = new city('paris', 20, 38, 2.3);
let lima = new city('lima', 2, 16, 4.6);

seattle.getRandomCustNum();
seattle.getRandomCookiesNum();
console.log(seattle);
seattle.render();

tokyo.getRandomCustNum();
tokyo.getRandomCookiesNum();
console.log(tokyo);
tokyo.render();

dubai.getRandomCustNum();
dubai.getRandomCookiesNum();
console.log(dubai);
dubai.render();

paris.getRandomCustNum();
paris.getRandomCookiesNum();
console.log(paris);
paris.render();

lima.getRandomCustNum();
lima.getRandomCookiesNum();
console.log(lima);
lima.render();
