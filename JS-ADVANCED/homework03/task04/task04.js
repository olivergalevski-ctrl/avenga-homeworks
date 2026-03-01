import { getData } from "./api.js";

async function displayData() {
    const data = await getData();
    console.log(data);

const allProductsOfAllCarts = data.carts.flatMap(cart => cart.products);
console.log(allProductsOfAllCarts);

const totalQuantityOfProducts = allProductsOfAllCarts
.reduce((total, product) => total + product.quantity, 0);
console.log(totalQuantityOfProducts);

const cartWithTotalValueAbove100k = data.carts.filter(cart => cart.total > 100_000); 
console.log(cartWithTotalValueAbove100k);

const totalRevenueOfAllCarts = data.carts
.reduce((total, cart) => total + cart.discountedTotal, 0);
console.log(totalRevenueOfAllCarts);

const highestValueCart = data.carts
.reduce((maxCart, cart) => cart.total > maxCart.total ? cart : maxCart, data.carts[0]);
console.log(highestValueCart);

const allProductsWithDiscountPercentageAbove15 = allProductsOfAllCarts
.filter(product => product.discountPercentage > 15);
console.log(allProductsWithDiscountPercentageAbove15);

const userIdOfCartWithHighestTotalQuantity = data.carts
.reduce((maxCart, cart) => cart.totalQuantity > maxCart.totalQuantity
? cart : maxCart, data.carts[0]).userId;
console.log(userIdOfCartWithHighestTotalQuantity);

const mostExpensiveProduct = allProductsOfAllCarts
.reduce((maxProduct, product) => product.price > maxProduct.price ? product : maxProduct, allProductsOfAllCarts[0]);
console.log(mostExpensiveProduct);

const averageDisountedTotalPerCart = totalRevenueOfAllCarts / data.carts.length;
console.log(averageDisountedTotalPerCart);

const top3MostExpensiveProductsAfterDiscount = allProductsOfAllCarts
.toSorted((a, b) => (b.price * (1 - b.discountPercentage / 100)) - (a.price * (1 - a.discountPercentage / 100)))
.slice(0, 3);
console.log(top3MostExpensiveProductsAfterDiscount);
}
displayData();