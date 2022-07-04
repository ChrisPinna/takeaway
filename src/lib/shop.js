const Order = require('./order');
const Twilio = require('./twilio');

class Shop {
  constructor() {
    this.menu = [
      {dishId: 1, name: 'Burger', priceInPence: 599}, 
      {dishId: 2, name: 'Chicken', priceInPence: 999}, 
      {dishId: 3, name: 'Steak', priceInPence: 1599}
    ]
    this.order =  new Order;
    this.twilio = new Twilio;
    this.delayTime = 1;
  }

  showMenu() {
    return this.#menuBuiler();
  }

  selectItem(itemId, quantity) {
    if (this.#argumentsAreNotNumbers(itemId, quantity)) {
      throw 'Error: Only numbers allowed as arguments!'
    } else {
      this.#addItemToOrder(itemId, quantity);
    }
  }

  showOrder() {
    return this.order.buildOrder();
  }

  confirmOrder() {
    this.twilio.sendConfirmationMessage(this.#getArrivalTime());
  }

  #getArrivalTime() {
    const orderDate = new Date;
    return this.#padTo2Digits(orderDate.getHours() + this.delayTime) + ':' + this.#padTo2Digits(orderDate.getMinutes());
  }

  #padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  
  #addItemToOrder(itemId, quantity) {
    this.menu.forEach(dish => {
        if (dish.dishId === itemId) {
          this.order.addItem(dish.name, this.#calculateItemPrice(dish.priceInPence, quantity), quantity);
        };
      }
    );
  }

  #argumentsAreNotNumbers(itemId, quantity) {
    return isNaN(itemId) || isNaN(quantity);
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