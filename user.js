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

const login = (page, username, password) => {
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

const main = () => {
  visitPage('http://localhost:8000/join?gameId=1').then((page) => login(page, 'ak', '1'))
  visitPage('http://localhost:8000/join?gameId=1').then((page) => login(page, 'pk', '1'))
  visitPage('http://localhost:8000/join?gameId=1').then((page) => login(page, 'lp', '1'))
}

main();

