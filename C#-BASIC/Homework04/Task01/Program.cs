
using System.ComponentModel.Design;
using Task01;

List<Driver> drivers = new List<Driver>()
        {
            new Driver { Name = "Bob", Skill = 5 },
            new Driver { Name = "Greg", Skill = 6 },
            new Driver { Name = "Jill", Skill = 7 },
            new Driver { Name = "Anne", Skill = 8 }
        };

List<Car> cars = new List<Car>()
        {
            new Car { Model = "Hyundai", Speed = 100 },
            new Car { Model = "Mazda", Speed = 110 },
            new Car { Model = "Ferrari", Speed = 150 },
            new Car { Model = "Porsche", Speed = 140 }
        };

bool raceAgain = true;

while (raceAgain)
{
    foreach (Car car in cars)
    {
        car.Driver = null;
    }

    int car1Index = GetValidIndex("Choose a car no.1:", cars);

    int driver1Index = GetValidIndex("Choose driver for car no.1:", drivers);
    cars[car1Index].Driver = drivers[driver1Index];

    int car2Index;

    while (true)
    {
        car2Index = GetValidIndex("Choose a car no.2:", cars);

        if (car2Index != car1Index)
        {
            break;
        }
        Console.WriteLine("You cannot choose the same car. Try again.\n");
    }

    int driver2Index;

    while (true)
    {
        driver2Index = GetValidIndex("Choose driver for car no.2:", drivers);

        if (driver2Index != driver1Index)
        {
            break;
        }
        Console.WriteLine("You cannot choose the same driver. Try again.\n");
    }
    cars[car2Index].Driver = drivers[driver2Index];

    Race race = new Race();
    Car winner = race.RaceCars(cars[car1Index], cars[car2Index]);

    if (winner == cars[car1Index])
    {
        Console.WriteLine($"Winner is {cars[car1Index].Driver.Name} driving {cars[car1Index].Model} with speed of {cars[car1Index].CalculateSpeed()} km/h");
    }
    else if (winner == cars[car2Index])
    {
        Console.WriteLine($"Winner is {cars[car2Index].Driver.Name} driving {cars[car2Index].Model} with speed of {cars[car2Index].CalculateSpeed()} km/h");
    }
    else
    {
        Console.WriteLine("It's a tie.");
    }

    Console.WriteLine("\nDo you want to race again? (y/n)");
    string input = Console.ReadLine().ToLower();

    if (input != "y")
    {
        raceAgain = false;
    }

    Console.Clear();
}
static int GetValidIndex<T>(string message, List<T> list)
{
    int index = 0;
    bool isValid = false;

    while(!isValid || index < 1 || index > list.Count)
    {
        Console.WriteLine(message);

        for (int i = 0; i < list.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {list[i]}");
        }

        Console.WriteLine("Enter number:");
        isValid = int.TryParse(Console.ReadLine(), out index);

        if (!isValid || index < 1 || index > list.Count)
        {
            Console.WriteLine("Invalid input. Try again.\n");
        }
    } 

    return index - 1;
}