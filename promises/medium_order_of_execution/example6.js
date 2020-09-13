const func1 = async () => {
  console.log("Start func1");
  await null;
  console.log("Intermediate func1, before calling func2");
  func2();
  console.log("Intermediate func1, after calling func2");
  await null;
  console.log("End func1");
};

const func1Alt = () => {
  new Promise((resolve) => {
    console.log("Start func1");
    resolve();
  })
    .then(() => {
      console.log("Intermediate func1, before calling func2");
      func2Alt();
      console.log("Intermediate func1, after calling func2");
    })
    .then(() => {
      console.log("End func1");
    });
};

const func2 = async () => {
  console.log("Start func2");
  await null;
  console.log("Intermediate func2");
  await null;
  console.log("End func2");
};

const func2Alt = () => {
  new Promise((resolve) => {
    console.log("Start func2");
    resolve();
  })
    .then(() => {
      console.log("Intermediate func2");
    })
    .then(() => {
      console.log("End func2");
    });
};

func1Alt();
