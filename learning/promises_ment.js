const myFirstPromise = () => new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  resolve("some Value"); // fulfilled
  // or
  // not do the same twice
  //reject("failure reason"); // rejected
});

myFirstPromise().then(data => console.log(data)).catch(error => console.log("error"));