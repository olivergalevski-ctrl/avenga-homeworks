Console.WriteLine("Task01-MethodVersion");

double num1 = ReadNumber("Enter the First number: ");
double num2 = ReadNumber("Enter the Second number: ");
char operation = ReadOperation();

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
        while (num2 == 0)
        {
            Console.WriteLine("Cannot divide by zero.");
            num2 = ReadNumber("Enter the Second number again: ");
        }
        result = num1 / num2;
        break;
}

Console.WriteLine("The result is: " + result);
    
    static double ReadNumber(string message)
{
    while (true)
    {
        Console.Write(message);
        if (double.TryParse(Console.ReadLine(), out double number))
            return number;

        Console.WriteLine("Invalid number, please try again.");
    }
}

static char ReadOperation()
{
    while (true)
    {
        Console.Write("Enter the Operation (+, -, *, /): ");
        string input = Console.ReadLine();

        if (!string.IsNullOrWhiteSpace(input) && input.Length == 1)
        {
            char op = input[0];

            if (op == '+' || op == '-' || op == '*' || op == '/')
                return op;
        }

        Console.WriteLine("Invalid operation, please try again.");
    }
}
