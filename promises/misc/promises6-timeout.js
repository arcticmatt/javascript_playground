import { getTimeStr, getTimeoutPromise } from "./util.js";

const main = async () => {
  console.log(`Start, time = ${getTimeStr()}`);
  await getTimeoutPromise("1", "prom1", 1000);
  await getTimeoutPromise("2", "prom2", 2000);
  console.log(`End, time = ${getTimeStr()}`);
};

main();
