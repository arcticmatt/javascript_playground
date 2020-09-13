import { getTimeStr, getTimeoutPromise } from "./util.js";

const main = async () => {
  getTimeoutPromise("0", "prom0", 0);
  console.log(`Start, time = ${getTimeStr()}`);
  for (let i = 0; i < 2000000000; i++) {}
  await null;
  await null;
  await null;
  console.log(`End, time = ${getTimeStr()}`);
};

main();
