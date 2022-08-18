const users = require('./data/users.json');

const { loginUserInNewBrowser, startGame } = require('./lib.js');

const main = () =>
  Promise.all([users.ak, users.pk, users.dk, users.gk].map(loginUserInNewBrowser))
    .then(startGame);

main();