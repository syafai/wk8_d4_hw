"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(id = (0, uuid_1.v4)(), name, price, descr) {
        this._id = (0, uuid_1.v4)();
        this._id = id;
        this._name = name;
        this._price = price;
        this._descr = descr;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get descr() {
        return this._descr;
    }
    set descr(value) {
        this._descr = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class User {
    constructor(name, age, cart, id = (0, uuid_1.v4)()) {
        this._id = (0, uuid_1.v4)();
        this._id = id;
        this._name = name;
        this._age = age;
        this._cart = cart;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id_1() {
        return this._id;
    }
    set id_1(value) {
        this._id = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
}
class Shop {
    constructor(items = []) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(item) {
        this._items = this._items.filter((shopItem) => shopItem.id !== item.id);
    }
}
function createUser(id, name, age) {
    return new User(name, age, [], id);
}
function createItem(id, name, price, descr) {
    return new Item(id, name, price, descr);
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
function removeQuantityFromCart(item, quantity, user) {
    let count = 0;
    user.cart = user.cart.filter((cartItem) => {
        if (cartItem.id === item.id) {
            count++;
            return count > quantity;
        }
        return true;
    });
}
function cartTotal(user) {
    let total = 0;
    for (const item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    console.log("User's Cart:");
    for (const item of user.cart) {
        console.log(`- ${item.name} - $${item.price}`);
    }
}
const shop = new Shop();
const itemA = createItem((0, uuid_1.v4)(), "Milk", 10, "Lactade Milk");
const itemB = createItem((0, uuid_1.v4)(), "Rice", 15, "Basmati Rice");
const itemC = createItem((0, uuid_1.v4)(), "Carrots", 20, "Vegetables");
shop.addItem(itemA);
shop.addItem(itemB);
shop.addItem(itemC);
console.log(shop);
const user = createUser((0, uuid_1.v4)(), "Saraa Yafai", 25);
console.log('Name: ' + user.name);
console.log("Age: " + user.age);
addToCart(itemA, user);
console.log("User's cart after adding Item A:");
printCart(user);
console.log("Total price of user's cart:", cartTotal(user));
addToCart(itemB, user);
addToCart(itemC, user);
addToCart(itemA, user);
console.log("User's cart after adding Item B, Item C, and 2nd Item A:");
printCart(user);
console.log("Total price of user's cart:", cartTotal(user));
removeFromCart(itemA, user);
console.log("User's cart after removing Item A:");
printCart(user);
console.log("Total price of user's cart:", cartTotal(user));
removeQuantityFromCart(itemC, 2, user);
console.log("User's cart after removing 2 instances of Item C:");
printCart(user);
console.log("Total price of user's cart:", cartTotal(user));
