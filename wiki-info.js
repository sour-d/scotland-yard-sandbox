const puppeteer = require('puppeteer');

const readWiki = topic => new Promise((res, rej) => {
  puppeteer.launch({ headless: false }).then(browser => {
    browser.newPage().then(page => {
      page.goto('https://www.wikipedia.org/').then(() => {
        page.type('#searchInput', topic).then(() => {
          page.click('button[type="submit"]').then(() => {
            page.waitForNetworkIdle().then(() => page.$eval('.vcard', e => e.innerText).then(text => {
              // browser.close();
              res(text)
            }))

          })
        })
      })
    })
  }).catch(reason => rej(reason));
});

const main = (topic) => {
  readWiki(topic)
    .then(result => console.log(result))
    .catch(err => console.error('failed due to', err));
}

main(process.argv[2]);