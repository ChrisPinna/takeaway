const Order = require('../lib/order')

class Shop {
  constructor() {
    this.menu = [
      {dishId: 1, name: 'Burger', priceInPence: 599}, 
      {dishId: 2, name: 'Chicken', priceInPence: 999}, 
      {dishId: 3, name: 'Steak', priceInPence: 1599}
    ]
    this.order =  new Order;
  }

  showMenu() {
    return this.#menuBuiler();
  }

  selectItem(itemId, quantity) {
    if (isNaN(itemId) || isNaN(quantity)) {
      throw 'Error: Only numbers allowed as arguments!'
    } else {
      this.menu.forEach
    (dish => 
      { 
        if (dish.dishId === itemId) {
        this.order.addItem(dish.name, this.#calculateItemPrice(dish.priceInPence, quantity), quantity);
        };
      }
    );
    }
  }

  showOrder() {
    return this.order.buildOrder();
  }

  #calculateItemPrice(dishPrice, quantity) {
    return dishPrice * quantity;
  }

  #convertToPounds(pence) {
    return (pence / 100);
  }

  #menuBuiler() {
    let menuString = ``;
    this.menu.forEach( dish => 
        menuString += `${dish.dishId}- ${dish.name} £${this.#convertToPounds(dish.priceInPence)}\n`
      );
    return menuString;
  }
}

module.exports = Shop;