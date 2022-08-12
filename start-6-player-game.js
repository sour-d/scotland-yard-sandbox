const users = require('./users.json');
const { loginUserInNewBrowser, startGame } = require('./lib.js');


const main = () =>
  Promise.all(Object.values(users).map(loginUserInNewBrowser))
    .then(startGame);
main();