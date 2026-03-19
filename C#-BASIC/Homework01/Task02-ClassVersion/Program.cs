Console.WriteLine("Task02-ClassVersion");

Console.Write("Enter the First number: ");
if (!double.TryParse(Console.ReadLine(), out double num1))
{
    Console.WriteLine("Invalid input for first number.");
    return;
}

Console.Write("Enter the Second number: ");
if (!double.TryParse(Console.ReadLine(), out double num2))
{
    Console.WriteLine("Invalid input for second number.");
    return;
}

Console.Write("Enter the Third number: ");
if (!double.TryParse(Console.ReadLine(), out double num3))
{
    Console.WriteLine("Invalid input for first number.");
    return;
}

Console.Write("Enter the Forth number: ");
if (!double.TryParse(Console.ReadLine(), out double num4))
{
    Console.WriteLine("Invalid input for second number.");
    return;
}

double AvgResult = (num1 + num2 + num3 + num4) / 4;

Console.WriteLine($"The average number of the inputed numbers is: {AvgResult}");