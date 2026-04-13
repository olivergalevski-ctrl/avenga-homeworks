namespace Task02.Helpers
{
    public static class ConsolePrinter
    {
       public static void PrintCollectionItems<T>(List<T> collection, string header = "")
        {
            if (!string.IsNullOrEmpty(header))
                Console.WriteLine(header);
            Console.WriteLine("--------------------------");

            if (collection == null || collection.Count == 0)
            {
                Console.WriteLine("No products found.");
                return;
            }
            foreach (var item in collection)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("--------------------------");
        }
    }
}
