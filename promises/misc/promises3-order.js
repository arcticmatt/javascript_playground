import { getFulfilledPromise, logThen } from "./util.js";

// Order will be interleaved, because only the initial promisees are fulfilled.

const old = Promise.prototype.then;
Promise.prototype.then = function foo(onFulfilled, onRejected) {
  console.log("In Promise.prototype.then", this);
  return old.call(this, onFulfilled, onRejected);
};

const prom1 = getFulfilledPromise("prom1")
  .then(logThen.bind(null, "1"))
  .then(logThen.bind(null, "2"));

console.log("After adding then handlers for prom1");

const prom2 = getFulfilledPromise("prom2")
  .then(logThen.bind(null, "3"))
  .then(logThen.bind(null, "4"));

console.log("After adding then handlers for prom2");
