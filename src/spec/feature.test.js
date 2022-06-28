const Shop = require('../lib/shop')
const Order = require('../lib/order')

describe('order a burger', () => {
  test('order a burger', () => {
    const shop = new Shop;
    expect(shop.showOrder()).toBe("Your basket is empty");
  });
});