const users = require('./data/users.json');

const { loginUserInNewBrowser, startGame } = require('./lib.js');

const main = () =>
  Promise.all(
    [
      users['sourav das'],
      users['sourav banerjee'],
      users['rishabh'],
      users['ankamma']
    ].map(loginUserInNewBrowser)
  )
    .then(startGame);

main();