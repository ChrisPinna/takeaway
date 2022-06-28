const Order = require('../lib/order')

describe('addItem method', () => {
  test('should returns a menu list', () => {
    expect(() => {
      const order = new Order;
      order.addItem('Burger', 2, 5.99)
    }).not.toThrow();
  });
});