const Order = require('../lib/order')

describe('addItem method', () => {
  test('should returns a menu list', () => {
    expect(() => {
      const order = new Order;
      order.addItem('Burger', 2, 5.99)
    }).not.toThrow();
  });

  test('should returns a menu list', () => {
    const order = new Order;
    order.addItem('Burger', 5.99, 1)
    expect(order.items).toEqual([{name: 'Burger', price: 5.99, quantity: 1}]);
  });
});
