import { getTimeStr, getTimeoutPromise } from "./util.js";

new Promise((resolve) => {
  console.log(`Start, time = ${getTimeStr()}`);
  resolve();
})
  .then(() => {
    return getTimeoutPromise("1", "prom1", 1000);
  })
  .then(() => {
    return getTimeoutPromise("2", "prom2", 2000);
  })
  .then(() => {
    console.log(`End, time = ${getTimeStr()}`);
  });
