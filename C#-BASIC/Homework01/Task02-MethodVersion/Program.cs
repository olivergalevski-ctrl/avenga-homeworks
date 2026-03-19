Console.WriteLine("Task02-MethodVersion");

CalculateAndPrintAverage();
static void CalculateAndPrintAverage()
{
    double sum = 0;
    int count = 0;

    while (true)
    {
        Console.Write("Enter a number (0 to stop): ");
        string input = Console.ReadLine();

        if (double.TryParse(input, out double number))
        {
            if (number == 0)
                break;

            sum += number;
            count++;
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a valid number.");
        }
    }

    if (count > 0)
    {
        double average = sum / count;
        Console.WriteLine($"The average is: {average}");
    }
    else
    {
        Console.WriteLine("No numbers were entered.");
    }
}

