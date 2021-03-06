const Shop = require('../lib/shop')

describe('showMenu method', () => {
  test('should returns a menu list', () => {
    const shop = new Shop;
    expect(shop.showMenu()).toBe("1- Burger £5.99\n2- Chicken £9.99\n3- Steak £15.99\n");
  });
});

describe('selectItem method', () => {
  test('should take a itemId and quantitie', () => {
    expect(() => {
      const shop = new Shop;
      shop.selectItem(1, 2);
    }).not.toThrow();
  });
  
  test('should should throw error when given wrong data type as argument', () => {
    expect(() => {
      const shop = new Shop;
      shop.selectItem('a', [2]);
    }).toThrow();
  });
});

describe('showOrder method', () => {
  test('should returns a message when basket is empty', () => {
    const shop = new Shop;
    expect(shop.showOrder()).toBe("Your basket is empty");
  });
});
