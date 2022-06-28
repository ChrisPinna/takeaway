const Shop = require('../lib/shop')

describe('Shop Class', () => {
  test('it returns a list of dishes', () => {
		const shop = new Shop;
		expect(shop.showMenu()).toBe("1- Burger £5.00\n2- Chicken £9.00\n3- Steak £15.00")
  });
});