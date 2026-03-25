Console.WriteLine("Task02-MethodVersion");

string[] studentsG1 = GetNames();
string[] studentsG3 = GetNames();

while (true)
{
    Console.WriteLine("Enter student group: ( there are 1 and 2 )");
    if (int.TryParse(Console.ReadLine(), out int inputNumber))
    {
        switch (inputNumber)//prashanje, dali e pooptimalno vaka ili so if/else kako vo Task02?
        {
            case 1:
                Console.WriteLine("The Students in G1 are: ");
                PrintStudents(studentsG1);
                break;
            case 2:
                Console.WriteLine("The Students in G3 are: ");
                PrintStudents(studentsG3);
                break;
            default:
                Console.WriteLine("Please enter 1 or 2");
                continue;
        }
        break;
    }
    else
    {
        Console.WriteLine("Please enter a valid number");
    }
}

static string[] GetNames()
{
    string[] names = new string[0];
    string input = "";
    int count = 0;

    while (input != "0")
    {
        Console.Write($"Enter a name for student {count + 1} (or 0 to stop): ");
        input = Console.ReadLine();

        if (!string.IsNullOrWhiteSpace(input) && input != "0")
        {
            Array.Resize(ref names, names.Length + 1);
            names[names.Length - 1] = input;
            count++;
        }
    }

    return names;
}

static void PrintStudents(string[] students)
{
    foreach (string student in students)
    {
        Console.WriteLine(student);
    }
}