using System.Globalization;

Console.WriteLine("Age Calculator");

while (true)
{
    Console.Write("Enter your birthdate (dd-MM-yyyy): ");
    string input = Console.ReadLine();

    if (!DateTime.TryParseExact(input, "dd-MM-yyyy",
        CultureInfo.InvariantCulture,
        DateTimeStyles.None,
        out DateTime birthDate))
    {
        Console.WriteLine("Invalid format. Please use dd-MM-yyyy.");
    }
    else
    {
        int age = AgeCalculator(birthDate);
        BirthdayCheck(birthDate, age);
        break;
    }
}
static int AgeCalculator(DateTime birthDate)
{
    int age = DateTime.Now.Year - birthDate.Year;

    if (DateTime.Now < birthDate.AddYears(age))
    {
        age--;
    }

    return age;
}

static void BirthdayCheck (DateTime birthDate, int age)
{
    if (DateTime.Now.Day == birthDate.Day &&
        DateTime.Now.Month == birthDate.Month)
    {
        Console.WriteLine($"Happy Birthday!!! Your age is {age} now.");
    }
    else if (DateTime.Now.Day < birthDate.Day && 
        DateTime.Now.Month == birthDate.Month)
    {
        int days = birthDate.Day - DateTime.Now.Day;
        Console.WriteLine($"Oooh someone's birthday coming in {days} days. Enjoy in your {age} till then.");
    }
    else if (DateTime.Now.Day > birthDate.Day &&
    DateTime.Now.Month == birthDate.Month)
    {
        int days = DateTime.Now.Day - birthDate.Day;
        if (days == 1)
        {
            Console.WriteLine($"{days} day passed from your birthday. You are {age} now. Be more serious.");
        }
        else
        {
            Console.WriteLine($"{days} days passed from your birthday. You are {age} now. Be more serious.");
        }
    }
    else
    {
        Console.WriteLine($"Your age is: {age}");
    }
}