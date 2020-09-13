import { getFulfilledPromise, logThen } from "../util.js";

const main = async () => {
  console.log("Start main");
  await null;
  console.log("Intermediate main");
  await null;
  console.log("End main");
};

// Main is analagous to this.
const main2 = () => {
  console.log("Start main");
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    console.log("Intermediate main");
    new Promise((resolve) => {
      resolve();
    }).then(() => {
      console.log("End main");
    });
  });
};

getFulfilledPromise("outer")
  .then(logThen.bind(null, "1"))
  .then(logThen.bind(null, "2"));
main2();
