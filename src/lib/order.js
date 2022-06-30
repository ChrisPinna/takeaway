class Order {
  constructor () {
    this.items = [];
    this.orderHeader = `Your order\n`;
    this.orderFooter = `Total: £`;
  };

  addItem(name, price, quantity) {
    const item = this.#constructItem(name, price, quantity);
    this.items.push(item);
  };


  
  buildOrder() {
    if (this.#itemsIsEmpty()) {
      return "Your basket is empty";
    } else {
      return this.orderHeader + this.#itemStringifyer() + this.orderFooter + this.#buildTotalPriceInPounds();
    }
  };
  
  #itemsIsEmpty() {
    return this.items.length === 0;
  }
  
  #constructItem(name, price, quantity) {
    return { name: name, price: price, quantity: quantity };
  };

  #itemStringifyer() {
    let itemsSting = ``;
    this.items.forEach(item => itemsSting += `${item.name} x${item.quantity} £${this.#convertToPounds(item.price)}\n`);
    return itemsSting;
  };

  #convertToPounds(pence) {
    return (pence / 100);
  };

  #buildTotalPriceInPounds() {
    let totalPriceInPence = 0;
    this.items.forEach( item => totalPriceInPence += item.price);
    return this.#convertToPounds(totalPriceInPence);
  };
}

module.exports = Order;