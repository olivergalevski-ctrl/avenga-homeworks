Console.WriteLine("Task01");

int[] arrayOfIntegers = new int[6];

for (int i = 0; i < arrayOfIntegers.Length; i++)
{
    Console.WriteLine($"Please enter number {i + 1}:");
    if (!int.TryParse(Console.ReadLine(), out int inputNumber))
    {
        Console.WriteLine("Please enter a valid number");
        i--;
        continue;
    }

    arrayOfIntegers[i] = inputNumber;
}

int sumOfEvenNumbers = 0;

foreach (int number in arrayOfIntegers)
{
    if (number % 2 == 0)
    {
        sumOfEvenNumbers += number;
    }
}
Console.WriteLine($"The sum of the inputed even numbers is: {sumOfEvenNumbers}");
