
using Task02.Domain.Models;
using Task02.Domain.Enums;
using Task02.Helpers;

List<Product> products = StaticDatabase.Products;

List<Product> priceGreaterThan500 = products.Where(x => x.Price > 500).ToList();
ConsolePrinter.PrintCollectionItems(priceGreaterThan500, "ALL PRODUCTS WITH PRICE GREATER THAN 500$");

List<Product> allSkincareProducts = products.Where(x => x.Category == ProductCategory.Skincare).ToList();
ConsolePrinter.PrintCollectionItems(allSkincareProducts, "ALL SKINCARE PRODUCTS");

List<string> allTitles = products.Select(x => x.Title).ToList();
ConsolePrinter.PrintCollectionItems(allTitles, "ALL PRODUCTS TITLES");

List<string> allProductsInCategoryLaptops = products
    .Where(x => x.Category == ProductCategory.Laptops)
    .Select(p => p.Title)
    .ToList();
ConsolePrinter.PrintCollectionItems(allProductsInCategoryLaptops, "ALL PRODUCTS IN LAPTOPS CATEGORY");

List<string> allDescFromAllProductsWithStockLessThan50 = products
    .Where(x => x.Stock < 50)
    .Select(p => p.Description)
    .ToList();
ConsolePrinter.PrintCollectionItems(allDescFromAllProductsWithStockLessThan50, "ALL DESCRIPTIONS FROM PRODUCTS WITH STOCK LESS THAN 50");

List<string> allProductsTitlesWithRaitingAbove4dot5 = products
    .Where(x => x.Rating > 4.5)
    .Select(p => p.Title)
    .ToList();
ConsolePrinter.PrintCollectionItems(allProductsTitlesWithRaitingAbove4dot5, "ALL PRODUCTS TITLES WITH RAITING ABOVE 4.5");

List<string> allProductsTitlesWithPriceBetween100and200 = products
    .Where(x => x.Price >= 100 && x.Price <= 200)
    .Select(p => p.Title)
    .ToList ();
ConsolePrinter.PrintCollectionItems(allProductsTitlesWithPriceBetween100and200, "ALL PRODUCTS TITLES WITH PRICE BETWEEN 100 AND 200$");

List<string> allBrandsWithPriceAbove1000 = products
    .Where(x => x.Price >= 1000)
    .Select(p => p.Brand)
    .ToList();
ConsolePrinter.PrintCollectionItems(allBrandsWithPriceAbove1000, "ALL BRANDS WITH PRICE ABOVE 1000$");

List<string> productsContainingPerfumeInTitle = products
    .Where(x => x.Title.Contains("perfume", StringComparison.OrdinalIgnoreCase))
    .Select(p => p.Title)
    .ToList();
ConsolePrinter.PrintCollectionItems(productsContainingPerfumeInTitle, "ALL PRODUCTS COINTAINING PERFUME IN TITLE");

Product lastGroceryProduct = products.LastOrDefault(x => x.Category == ProductCategory.Groceries);
Console.WriteLine("LAST PRODUCT IN GROCERIES CATEGORY");
Console.WriteLine("--------------------------");
Console.WriteLine(lastGroceryProduct);
Console.WriteLine("--------------------------");

Product firstProductWithPriceAbove1000 = products.FirstOrDefault(x => x.Price > 1000);
Console.WriteLine("FIRST PRODUCT WITH PRICE ABOVE 1000$");
Console.WriteLine("--------------------------");
Console.WriteLine(firstProductWithPriceAbove1000);
Console.WriteLine("--------------------------");

List<string> allProductsFromGroceriesWithStockAbove150 = products
    .Where(x => x.Category == ProductCategory.Groceries && x.Stock > 150)
    .Select(p => p.Title)
    .ToList();
ConsolePrinter.PrintCollectionItems(allProductsFromGroceriesWithStockAbove150, "ALL PRODUCTS FROM GROCERIES CATEGORY WITH STOCK ABOVE 150$");

Product firstItemFromBrandHemaniTea = products.FirstOrDefault(x => x.Brand.Contains("Hemani Tea", StringComparison.OrdinalIgnoreCase));
Console.WriteLine("FIRST PRODUCT FROM BRAND HEMANI TEA");
Console.WriteLine("--------------------------");
Console.WriteLine(firstItemFromBrandHemaniTea);
Console.WriteLine("--------------------------");

List<Product> allRatingsForStockBetween30And50 = products.Where(x => x.Stock > 30 && x.Stock < 50).ToList();
ConsolePrinter.PrintCollectionItems(allRatingsForStockBetween30And50, "ALL PRODUCTS RAITINGS WITH STOCK BETWEEN 30 AND 50");

List<double> doublesOfAllRatingsForStockBetween30And50 = products
    .Where(x => x.Stock > 30 && x.Stock < 50)
    .Select(p => p.Rating)
    .ToList();
ConsolePrinter.PrintCollectionItems(doublesOfAllRatingsForStockBetween30And50, "ALL PRODUCTS RAITINGS WITH STOCK BETWEEN 30 AND 50 (DOUBLES)");

double avgPrice = products.Any() 
    ? products.Average(p => p.Price) 
    : 0;
Console.WriteLine("AVERAGE PRICE OF ALL PRODUCTS");
Console.WriteLine("--------------------------");
Console.WriteLine($"{avgPrice:F2}$");
Console.WriteLine("--------------------------");

int sumOfAllStock = products.Sum(p => p.Stock);
Console.WriteLine("TOTAL SUM OF ALL STOCKS");
Console.WriteLine("--------------------------");
Console.WriteLine($"{sumOfAllStock}");
Console.WriteLine("--------------------------");

string checkIfAnyProductPriceAbove2000 = products.Any(p => p.Price > 2000)
    ? "There is a product over $2000"
    : "No products over $2000";
Console.WriteLine("CHECK IF THERE IS ANY PRODUCT WITH PRICE ABOVE 2000$");
Console.WriteLine("--------------------------");
Console.WriteLine($"{checkIfAnyProductPriceAbove2000}");
Console.WriteLine("--------------------------");

Product mostExpensiveLaptop = products
    .Where(p => p.Category == ProductCategory.Laptops)
    .MaxBy(p => p.Price);
if (mostExpensiveLaptop != null)
{
    Console.WriteLine("MOST EXPENSIVE LAPTOP");
    Console.WriteLine("--------------------------");
    Console.WriteLine($"{mostExpensiveLaptop}");
    Console.WriteLine("--------------------------");
}
else  Console.WriteLine("NO LAPTOPS FOUND");

var skincareProducts = products
    .Where(p => p.Category == ProductCategory.Skincare)
    .Select(p => new { p.Title, p.Description })
    .ToList();
Console.WriteLine("TITLES AND DESCRIPTIONS OF ALL SKINCARE PRODUCTS");
Console.WriteLine("--------------------------");
foreach (var item in skincareProducts)
{
    Console.WriteLine($"Title: {item.Title}\n" +
        $"Description: {item.Description}\n");
}
Console.WriteLine("--------------------------");
