console.log("----------1. Product----------");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toText() {
    console.log(`${this.name} ${this.price}€ in total. ${this.containedVAT()}`);
  }

  containedVAT() {
    return `${(this.price - this.price / 1.16).toFixed(2)}€ VAT incl.`;
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.00);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

tracksuit.toText();
shoes.toText();
socks.toText();

tracksuit.containedVAT();
shoes.containedVAT();
socks.containedVAT();

console.log("----------2. Cart----------");

class Cart {
    constructor(){
        this.products = []
    }
    addProduct(shoppedProduct) {
        if (shoppedProduct instanceof Product){
        this.products.push(shoppedProduct)
    return `Total products ${this.products.length}`}
        else {
            return 'This product is not available in the shop'
        }
    }
    getProductInfoCart() {
        this.products.forEach(product => {
            product.toText()
        })
    }
    getTotalItemsPrice () {
        return this.products.reduce((acc, item) => acc += item.price, 0)
    }
}

const myCart = new Cart()

console.log(myCart.addProduct(tracksuit));
console.log(myCart.addProduct(shoes));
console.log(myCart.addProduct(socks));

myCart.addProduct(tracksuit)
console.log(myCart);