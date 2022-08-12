const users = require('./users.json');

const puppeteer = require('puppeteer');

const visitPage = (url) => {
  return new Promise((res, rej) => {
    puppeteer.launch({ headless: false }).then(browser => {
      browser.newPage().then(page => {
        page.goto(url).then(() => {
          res(page);
        })
      })
    }).catch(reason => rej(reason));
  })
};

const login = (username, password) => (page) => {
  return new Promise((res, rej) => {
    page.type('#username', username).then(() => {
      page.type('#password', password).then(() => {
        page.click('#login-btn').then(() => {
          page.waitForSelector('#join-game');
          res(page);
        })
      })
    })
  })
};

const hostGame = (page) => new Promise((res, rej) => {
  const hostButton = 'a[href="/host"]';
  const linkText = '#link-text';
  page.waitForSelector(hostButton).then(() =>
    page.click(hostButton).then(() => {
      page.waitForSelector(linkText).then(() =>
        page.$eval(linkText, e => e.innerText).then(gameLink => {
          res(gameLink.split('=')[1]);
        }))
    })).catch(err => rej(err));
});

const joinGame = (gameId) => page => new Promise((res, rej) => {
  const joinButton = '#join-game';
  const gameIdInput = 'input[name="gameId"]';
  page.waitForSelector(joinButton).then(() =>
    page.click(joinButton).then(() => {
      page.waitForSelector(gameIdInput).then(() =>
        page.type(gameIdInput, gameId).then(() =>
          page.click('.join-btn')).then(() =>
            res(page))
      )
    })
  ).catch(err => rej(err));
});

const playGame = (hostPage) => {
  const playButton = '#play';
  hostPage.waitForSelector(playButton, { visible: true }).then(() => hostPage.click(playButton, { delay: 3000 }));
};

const loginUserInNewBrowser = ({ username, password }) =>
  visitPage('http://localhost:8000').then(login(username, password));

const startGame = ([akPage, pkPage, lpPage]) => {
  hostGame(akPage).then(gameId => {
    Promise.all([pkPage, lpPage].map(joinGame(gameId))).then(() => playGame(akPage))
  })
};

const main = () =>
  Promise.all([users.ak, users.pk, users.lp].map(loginUserInNewBrowser))
    .then(startGame);

main();