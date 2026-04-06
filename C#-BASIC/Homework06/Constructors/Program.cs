using Constructors;

Console.WriteLine("Hello, Constructors!");


Console.WriteLine("\n======= Default Constructor =======");

User john = new User();
john.Name = "John Doe";
john.PrintInfo();


Console.WriteLine("\n======= Parameterized Constructors =======");

User jane = new User("Jane Doe", 30);
jane.PrintInfo();

User bob = new User("Bob Bobsky", 34, "bob@bobsky.com", Role.Admin);
bob.PrintInfo();


Console.ReadLine();