Console.WriteLine("Task03-ClassVersion");

Console.Write("Enter the First number: ");
if (!int.TryParse(Console.ReadLine(), out int num1))
{
    Console.WriteLine("Invalid input for first number.");
    return;
}

Console.Write("Enter the Second number: ");
if (!int.TryParse(Console.ReadLine(), out int num2))
{
    Console.WriteLine("Invalid input for first number.");
    return;
}

int temp = num1;
num1 = num2;
num2 = temp;

Console.WriteLine("After Swapping");
Console.WriteLine($"First Number: {num1}");
Console.WriteLine($"Second Number: {num2}");