import { getTimeStr, getTimeoutPromise } from "./util.js";

const main = async () => {
  getTimeoutPromise("0", "prom0", 1500);
  console.log(`Start, time = ${getTimeStr()}`);
  await getTimeoutPromise("1", "prom1", 1000);
  console.log("Between awaits");
  await getTimeoutPromise("2", "prom2", 2000);
  console.log(`End, time = ${getTimeStr()}`);
};

main();
