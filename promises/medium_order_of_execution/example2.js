import {
  addLoggingToPromiseThen,
  getFulfilledPromise,
  logThen,
} from "../util.js";

addLoggingToPromiseThen();

const prom1 = getFulfilledPromise("prom1");
console.log("After creating prom1");
const prom2 = getFulfilledPromise("prom2");
console.log("After creating prom2");

prom2.then(logThen.bind(null, "1"));
prom2.then(logThen.bind(null, "2"));

console.log("After adding then handlers to prom2");

prom1.then(logThen.bind(null, "3"));
prom1.then(logThen.bind(null, "4"));

console.log("After adding then handlers to prom1");
