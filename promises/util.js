export function addLoggingToPromiseThen() {
  const old = Promise.prototype.then;
  Promise.prototype.then = function newThen(onFulfilled, onRejected) {
    console.log("In Promise.prototype.then", this);
    return old.call(this, onFulfilled, onRejected);
  };
}

export function getPromiseWithHandlers(result) {
  return new Promise((resolve) => {
    console.log(`Promise executor, result will be ${result}`);
    resolve(result);
  })
    .then(logThen.bind(null, "1"))
    .then(logThen.bind(null, "2"));
  // .finally(() => {
  //   console.log(`Promise finally, result = ${result}`);
  // });
}

export function getFulfilledPromise(result) {
  return new Promise((resolve) => {
    console.log(`Promise executor, result will be ${result}`);
    resolve(result);
  });
}

export function getTimeStr() {
  const date = new Date();
  return `${date.getMinutes()}:${date.getSeconds()}`;
}

export function getTimeoutPromise(label, result, timeout = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `[${label}] setTimeout, result = ${result}, time = ${getTimeStr()}`
      );
      resolve(result);
    }, timeout);
  });
}

export function logThen(label, result) {
  console.log(`[${label}] Promise then, result = ${result}`);
  return result;
}
