Console.WriteLine("Task02");

string[] studentsG1 = new string[5];
string[] studentsG3 = new string[5];

for (int i = 0; i < studentsG1.Length; i++)
{
    Console.WriteLine($"Please enter a name for student {i + 1} of G1:");
    string inputName = Console.ReadLine();
    studentsG1[i] = inputName;
}

for (int i = 0; i < studentsG3.Length; i++)
{
    Console.WriteLine($"Please enter a name for student {i + 1} of G3:");
    string inputName = Console.ReadLine();
    studentsG3[i] = inputName;
}

Console.WriteLine("Enter student group: ( there are 1 and 2 )");
if (int.TryParse(Console.ReadLine(), out int inputNumber))
{
    if (inputNumber == 1)
    {
        Console.WriteLine("The Students in G1 are: ");
        for (int i = 0; i < studentsG1.Length; i++)
        {
            Console.WriteLine($"{studentsG1[i]}");
        }
    }
    else if (inputNumber == 2)
    {
        Console.WriteLine("The Students in G3 are: ");
        for (int i = 0; i < studentsG3.Length; i++)
        {
            Console.WriteLine($"{studentsG3[i]}");
        }
    }
    else
    {
        Console.WriteLine("Please enter 1 or 2");
    }
}
else
{
    Console.WriteLine("Please enter a valid number");
}
