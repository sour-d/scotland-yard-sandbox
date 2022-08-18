const users = require('./data/users.json');
const { loginUserInNewBrowser, startGame } = require('./lib.js');


const main = () =>
  Promise.all([users.rs, users.lp, users.a, users.b, users.c, users.d].map(loginUserInNewBrowser))
    .then(startGame);

main();