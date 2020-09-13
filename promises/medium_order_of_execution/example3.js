import {
  addLoggingToPromiseThen,
  getFulfilledPromise,
  logThen,
} from "../util.js";

addLoggingToPromiseThen();

const prom1 = getFulfilledPromise("prom1");
const prom2 = prom1.then(logThen.bind(null, "1"));
const prom3 = prom2.then(logThen.bind(null, "2"));

console.log("After adding then handlers for prom1");

const prom4 = getFulfilledPromise("prom2");
const prom5 = prom4.then(logThen.bind(null, "3"));
const prom6 = prom5.then(logThen.bind(null, "4"));

console.log("After adding then handlers for prom2");
