import { getData } from "./api.js";

async function handleData() {
  const data = await getData();
  console.log(data);

const laptopsInStockOrderPriceDescending = data.products
.filter(product => product.category === "laptops" && product.stock > 0)
.sort((a, b) => b.price - a.price);
console.log(laptopsInStockOrderPriceDescending);

const firstGroceryItem = data.products.find(product => product.category === "groceries");
console.log(firstGroceryItem);

const indexOfFirstSamsungSmartphone = data.products
.findIndex(product => product.category === "smartphones" && product.brand === "Samsung");
console.log(indexOfFirstSamsungSmartphone);

const checkIfThereIsItemFromTheBrandSony = data.products.some(product => product.brand === "Sony");
console.log(checkIfThereIsItemFromTheBrandSony);

const theNameOfTheHighestRatedSkincareProduct = data.products
.filter(product => product.category === "beauty")
.sort((a, b) => b.rating - a.rating)[0].title;
console.log(theNameOfTheHighestRatedSkincareProduct);

const result = data.products.reduce(
  (acc, product) => {
    if (product.rating > 4.5) {
      acc.totalDiscount += product.discountPercentage;
      acc.count++;
    }
    return acc;
  },
  { totalDiscount: 0, count: 0 }
);

const averageDiscount =
  result.count === 0 ? 0 : result.totalDiscount / result.count;

console.log(averageDiscount);

const highestPricedProduct = data.products.reduce((acc, product) => {
  return product.price > acc.price ? product : acc;
}, data.products[0]);
console.log(highestPricedProduct);

const averagePrice = data.products.reduce(
    (acc, product) => {
      if (product.brand === "Apple" && product.category === "smartphones") {
        acc.totalPrice += product.price;
        acc.count++;
      }
        return acc;
    },
    { totalPrice: 0, count: 0 }
  );
const averagePriceOfIphones = averagePrice.count === 0 ? 0 : averagePrice.totalPrice / averagePrice.count;
console.log(averagePriceOfIphones);

const lowestPricedProduct = data.products.reduce((acc, product) => {
  return product.price < acc.price ? product : acc;
}, data.products[0]);
console.log(lowestPricedProduct);

}
handleData();