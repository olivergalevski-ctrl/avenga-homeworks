using Domain.Enums;

namespace Domain.Models
{
    public class CEO : Employee
    {
        public Employee[] Employees { get; set; }
        public int Shares { get; set; }
        public double SharePrices { get; set; }

        public CEO(
            int id,
            string firstName,
            string lastName,
            int age,
            double salary,
            Seniority seniority,
            Employee[] employees,
            int shares,
            double sharePrices)
            : base(id, firstName, lastName, age, salary, seniority)
        {
            Employees = employees;
            Shares = shares;
            SharePrices = sharePrices;
        }

        public void UpdateSharesPrice(double amount)
        {
            SharePrices = amount;
        }

        public void PrintEmployees(Employee[] employees)
        {
            Console.WriteLine("Employees:");
            foreach (Employee employee in employees)
            {
                Console.WriteLine(employee.GetFullName());
            }
        }
        public override double CalculateAnnualBonus()
        {
            return Salary + Shares * SharePrices;
        }
    }
}
