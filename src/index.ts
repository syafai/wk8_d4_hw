import { v4 as uuidv4} from 'uuid'

class Item{
    private _id: string = uuidv4();
    private _name: string ;
    private _price: number ;
    private _descr: string;
    
    constructor(
        id : string = uuidv4(),
        name : string,
        price : number,
        descr : string,
        
    )

    {
        this._id = id;
        this._name = name;
        this._price = price;
        this._descr = descr;
      }


public get id(): string {
    return this._id;
}
public set id(value: string) {
    this._id = value;
}

public get descr(): string {
    return this._descr;
}
public set descr(value: string) {
    this._descr = value;
}
public get price(): number {
    return this._price;
}
public set price(value: number) {
    this._price = value;
}
public get name(): string {
    return this._name;
}
public set name(value: string) {
    this._name = value;
}
}

class User {

    private _id: string = uuidv4();
    private _name: string;
    private _age: number;
    private _cart: Item[];

    
    constructor(
        name : string,
        age : number,
        cart : Item[],
        id : string = uuidv4()
    )

    {
        this._id = id;
        this._name = name;
        this._age = age;
        this._cart = cart;
      }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get id_1(): string {
        return this._id;
    }
    public set id_1(value: string) {
        this._id = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
}

class Shop {
    private _items: Item[];
  
    constructor(items: Item[] = []) {
      this._items = items;
    }
  
    public get items(): Item[] {
      return this._items;
    }
  
    public set items(value: Item[]) {
      this._items = value;
    }

    public addItem(item: Item): void {
        this._items.push(item);
      }
    
      public removeItem(item: Item): void {
        this._items = this._items.filter((shopItem) => shopItem.id !== item.id);
      }
    }



  function createUser(id: string, name: string, age: number): User {
    return new User(name, age, [], id);
  }
  
  
  function createItem(id: string, name: string, price: number, descr: string): Item {
    return new Item(id, name, price, descr);
  }
  
  function addToCart(item: Item, user: User): void {
    user.cart.push(item);
  }
  
  function removeFromCart(item: Item, user: User): void {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
  }
  
  function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
    let count = 0;
    user.cart = user.cart.filter((cartItem) => {
      if (cartItem.id === item.id) {
        count++;
        return count > quantity;
      }
      return true;
    });
  }
  
  function cartTotal(user: User): number {
    let total = 0;
    for (const item of user.cart) {
      total += item.price;
    }
    return total;
  }
  
  function printCart(user: User): void {
    console.log("User's Cart:");
    for (const item of user.cart) {
      console.log(`- ${item.name} - $${item.price}`);
    }
  }
  
const shop = new Shop();

const itemA = createItem(uuidv4(), "Milk", 10, "Lactade Milk");
const itemB = createItem(uuidv4(), "Rice", 15, "Basmati Rice");
const itemC = createItem(uuidv4(), "Carrots", 20, "Vegetables");

shop.addItem(itemA); 
shop.addItem(itemB);
shop.addItem(itemC);

console.log(shop)
  
const user = createUser(uuidv4(), "Saraa Yafai", 25);
  console.log('Name: ' + user.name)
  console.log("Age: " + user.age)
  
 
  
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