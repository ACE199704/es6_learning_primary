//
//new Object();   {}-->字面量
//new Array();     []
/*
const inventory = [{
    title: "Vue",
    price: 10
  },
  {
    title: "Angular",
    price: 15
  }
];

function createBookShop(inventory) {
  return {
    inventory, //inventory:inventory
    inventoryValue() {
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => {
        return book.title === title;
      }).price;
    }
  }
}

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Angular"));
*/

const inventory = [{
    title: "Angular",
    price: 10
  },
  {
    title: "Vue",
    price: 15
  }
];

function createBookShop(inventory) {
  return {
    inventory,
    totalValue() {
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0);
    },
    bookPrice(title) {
      return this.inventory.find(book => book.title === title).price;
    }

  }
}
const bookShop = createBookShop(inventory);
console.log(bookShop.totalValue());
console.log(bookShop.bookPrice("Angular"));
console.log(bookShop);