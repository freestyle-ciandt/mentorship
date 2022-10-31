import Item from './item';

export default class ItemBuilder {
  item;

  constructor() {
    this.item = new Item();
    return this;
  }

  withName(name) {
    this.item.name = name;
    return this;
  }

  withPrice(price) {
    this.item.price = price;
    return this;
  }

  build() {
    return this.item;
  }
};
