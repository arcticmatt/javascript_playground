import { getFulfilledPromise, logThen } from "../util.js";

getFulfilledPromise("foo")
  .then(logThen.bind(null, "1"))
  .then(logThen.bind(null, "2"));

console.log("After creating promise");
