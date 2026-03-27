using System.Globalization;

Console.WriteLine("Age Calculator v1.1");

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
    DateTime today = DateTime.Today;

    int age = today.Year - birthDate.Year;

    if (birthDate.Date > today.AddYears(-age))
    {
        age--;
    }

    return age;
}

static void BirthdayCheck(DateTime birthDate, int age)
{
    DateTime today = DateTime.Now.Date;

    DateTime thisYearBirthday = new DateTime(today.Year, birthDate.Month, birthDate.Day);

    DateTime lastBirthday;
    DateTime nextBirthday;

    if (thisYearBirthday > today)
    {
        nextBirthday = thisYearBirthday;
        lastBirthday = thisYearBirthday.AddYears(-1);
    }
    else
    {
        lastBirthday = thisYearBirthday;
        nextBirthday = thisYearBirthday.AddYears(1);
    }

    int daysUntil = (nextBirthday - today).Days;
    int daysPassed = (today - lastBirthday).Days;

    if (daysUntil == 0)
    {
        Console.WriteLine($"Happy Birthday!!! Your age is {age} now.");
    }
    else if (daysUntil == 1)
    {
        Console.WriteLine($"Your birthday is tomorrow! You are turning {age + 1}.");
    }
    else if (daysPassed == 1)
    {
        Console.WriteLine($"Your birthday was yesterday. You are {age} now.");
    }
    else if (daysPassed <= 7)
    {
        Console.WriteLine($"{daysPassed} days passed from your birthday. You are {age} now.");
    }
    else if (daysUntil <= 14)
    {
        Console.WriteLine($"Oooh someone's birthday coming in {daysUntil} days. Enjoy in your {age} till then.");
    }
    else
    {
        Console.WriteLine($"Your age is: {age}");
    }
}
