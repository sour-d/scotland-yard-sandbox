// const p = new Promise((resolve, reject) => {
//   reject();
// });

// p
//   .then(x => console.log(x))
//   .catch(_ => console.log('error occured'));

const timeout = (ms) => new Promise((res, rej) => {
  setTimeout(() => {
    res(new Date());
  }, ms);
});


//timeout 2s & 5s and then say done

Promise.all([timeout(2000), timeout(5000)]).then(([t1, t2]) => console.log(t1, t2));