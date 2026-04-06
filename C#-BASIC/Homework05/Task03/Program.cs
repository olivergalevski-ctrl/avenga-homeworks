using Domain.Models;

var customers = new List<Customer>()
{
    new Customer("John Doe", "1234567890123456", "1234", 1000m),
    new Customer("Jane Smith", "1111222233334444", "4321", 2000m)
};

while (true)
{
    Customer customer = null;

    while (customer == null)
    {
        customer = Authenticate(customers);

        if (customer == null)
            Console.WriteLine("Invalid credentials.\n");
    }

    Console.WriteLine($"Welcome {customer.CardHolder}!");

    bool isLoggedIn = true;

    while (isLoggedIn)
    {
        Console.WriteLine("\nATM Menu:");
        Console.WriteLine("1. Check Balance");
        Console.WriteLine("2. Deposit");
        Console.WriteLine("3. Withdraw");
        Console.WriteLine("4. Logout");

        Console.Write("Choose option: ");

        if (!int.TryParse(Console.ReadLine(), out int choice))
        {
            Console.WriteLine("Invalid input. Please enter a number.");
            continue;
        }

        switch (choice)
        {
            case 1:
                ShowBalance(customer);
                break;

            case 2:
                DepositMenu(customer);
                break;

            case 3:
                WithdrawMenu(customer);
                break;

            case 4:
                isLoggedIn = false;
                Console.WriteLine("Logged out.");
                break;

            default:
                Console.WriteLine("Invalid choice.");
                break;
        }
    }
}

    static void ShowBalance(Customer customer)
    {
        Console.WriteLine($"Your balance is: {customer.GetBalance()}$");
    }

    static void DepositMenu(Customer customer)
    {
        Console.Write("Enter amount to deposit: ");

        if (!decimal.TryParse(Console.ReadLine(), out decimal amount))
        {
            Console.WriteLine("Invalid amount.");
            return;
        }

        if (amount <= 0)
        {
            Console.WriteLine("Amount must be positive.");
            return;
        }

        customer.Deposit(amount);
        Console.WriteLine("Deposit successful.");
    }
    static void WithdrawMenu(Customer customer)
    {
        Console.Write("Enter amount to withdraw: ");

        if (!decimal.TryParse(Console.ReadLine(), out decimal amount))
        {
            Console.WriteLine("Invalid amount.");
            return;
        }

        if (amount <= 0)
        {
            Console.WriteLine("Amount must be positive.");
            return;
        }

        if (customer.Withdraw(amount))
            Console.WriteLine("Withdrawal successful.");
        else
            Console.WriteLine("Insufficient funds.");
    }

    static Customer Authenticate(List<Customer> customers)
    {
        Console.Write("Enter card number: ");
        string cardNumber = Console.ReadLine();

        Console.Write("Enter PIN: ");
        string pin = Console.ReadLine();

        foreach (var customer in customers)
        {
            if (customer.CardNumber == cardNumber && customer.PinMatches(pin))
            {
                return customer;
            }
        }

        return null;
    }


