const LIMIT = 250000000;
const PRINT = LIMIT / 10;
const HALF = LIMIT / 2;

async function main() {
  setTimeout(() => {
    console.log("first timeout");
  }, 100);
  console.log("first");
  for (let i = 0; i < LIMIT; i++) {
    if (i % PRINT === 0) {
      console.log("busy");
    }
    if (i % HALF === 0 && i !== 0) {
      await new Promise((resolve) => {
        console.log("in promise executor");
        setTimeout(() => {
          console.log("second timeout");
          resolve();
        }, 100);
        resolve();
      }).then((result) => {
        console.log("in promise then");
      });
      console.log("HALF");
    }
  }
  console.log("done");
}

main();
