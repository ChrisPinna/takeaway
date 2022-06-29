const Order = require('../lib/order')

class Shop {
  constructor() {
    this.order =  new Order;
  }

  showMenu() {
    return "1- Burger £5.99\n2- Chicken £9.99\n3- Steak £15.99";
  }

  selectItem() {

  }

  showOrder() {
    return "Your basket is empty";
  }
}

module.exports = Shop;