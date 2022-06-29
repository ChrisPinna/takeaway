const Shop = require('../lib/shop')

describe('ordering', () => {
  test('order nothing', () => {
    const shop = new Shop;
    expect(shop.showOrder()).toBe("Your basket is empty");
  });
  test('order 1 burger', () => {
    const shop = new Shop;
    shop.selectItem(1, 1);
    expect(shop.showOrder()).toBe("Your order\nBurger x1 £5.99\nTotal: £5.99");
  });
});