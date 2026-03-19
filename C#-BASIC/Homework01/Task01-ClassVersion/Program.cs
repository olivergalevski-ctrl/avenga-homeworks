Console.WriteLine("Task 01");

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

Console.Write("Enter the Operation (+, -, *, /): ");
string inputOp = Console.ReadLine();

if (string.IsNullOrWhiteSpace(inputOp) || inputOp.Length != 1)
{
    Console.WriteLine("Invalid operation.");
    return;
}

char operation = inputOp[0];
double result = 0;

switch (operation)
{
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        if (num2 != 0)
            result = num1 / num2;
        else
        {
            Console.WriteLine("Error: Division by zero is not allowed.");
            return;
        }
        break;

    default:
        Console.WriteLine("Invalid operation.");
        return;
}

Console.WriteLine("The result is: " + result);
