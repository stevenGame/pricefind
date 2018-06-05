const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
function maybe(obj, prop) {
    return obj != null? prop : obj;
}
nightmare
  .goto('https://www.target.com/')
  .type('.searchInputForm input', '075020039897')
  .click('[data-test="btnSearch"]')
  .wait('[data-test="productGridContainer"] ul li:first-child',3000)
  .click('[data-test="productGridContainer"] ul li a')
  .wait('[data-test="product-price"]',50000)
  .evaluate(() =>   {
    var el = document.querySelector('[data-test="product-price"]')
    return maybe(el,el.href);
  })
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })