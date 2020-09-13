import { getFulfilledPromise, logThen } from "../util.js";

const main = () => {
  new Promise((resolve) => {
    console.log("Start main");
    resolve();
  })
    .then(() => {
      console.log("Intermediate main");
    })
    .then(() => {
      console.log("End main");
    });
};

getFulfilledPromise("outer")
  .then(logThen.bind(null, "1"))
  .then(logThen.bind(null, "2"));
main();
