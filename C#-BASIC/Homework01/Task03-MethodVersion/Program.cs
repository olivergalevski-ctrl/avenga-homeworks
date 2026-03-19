Console.WriteLine("Task03-MethodVersion");

SwapAndPrintNumbers();

static void SwapAndPrintNumbers()
{
    int num1, num2;
    while (true)
    {
        Console.Write("Enter the First number: ");
        if (int.TryParse(Console.ReadLine(), out num1))
        { 
            break;
        }
        Console.WriteLine("Invalid input. Please enter a valid integer.");
}

    while (true)
    {
        Console.Write("Enter the Second number: ");
        if (int.TryParse(Console.ReadLine(), out num2))
        {
            break;
        }
        Console.WriteLine("Invalid input. Please enter a valid integer.");
    }

    int temp = num1;
    num1 = num2;
    num2 = temp;

    Console.WriteLine("After Swapping:");
    Console.WriteLine($"First Number: {num1}");
    Console.WriteLine($"Second Number: {num2}");


}