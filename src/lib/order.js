class Order {
  constructor () {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const item = this.#constructItem(name, price, quantity);
    this.items.push(item);
  }


  #constructItem(name, price, quantity) {
    return { name: name, price: price, quantity: quantity };
  }
}

module.exports = Order;