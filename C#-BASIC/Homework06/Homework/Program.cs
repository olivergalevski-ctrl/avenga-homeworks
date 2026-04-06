using Domain.Enums;
using Domain.Models;

Developer dev1 = new Developer(
            2, "Alice", "Johnson", 28, 50000, Seniority.Mid, "C#");

Developer dev2 = new Developer(
    3, "Bob", "Smith", 32, 65000, Seniority.Senior, "Java");

Manager manager1 = new Manager(
    4, "Carol", "White", 40, 80000, Seniority.Lead, "IT");

Manager manager2 = new Manager(
    5, "David", "Brown", 45, 90000, Seniority.Principal, "HR");

Contractor contractor1 = new Contractor(
    6,
    "Eve",
    "Davis",
    30,
    0,
    Seniority.Junior,
    160, 
    50, 
    manager1 
);

Employee[] employees = new Employee[]
{
            dev1,
            dev2,
            manager1,
            manager2,
            contractor1
};

CEO ceo = new CEO(
    1,
    "Alice",
    "Alison",
    35,
    8000,
    Seniority.Lead,
    employees,
    1000, 
    10     
);

ceo.UpdateSharesPrice(20.5);
Console.WriteLine(ceo.GetDetails());
ceo.PrintEmployees(employees);
Console.WriteLine($"CEO Annual Bonus: {ceo.CalculateAnnualBonus()}");