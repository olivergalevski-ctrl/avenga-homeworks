namespace Domain.Models
{
    public class Customer
    {
        public string CardHolder { get; private set; }
        public string CardNumber { get; private set; }
        private string CardPin { get; set; }

        private decimal Balance { get; set; }
        public Customer(string cardHolder, string cardNumber, string cardPin, decimal balance)
        {
            CardHolder = cardHolder;
            CardNumber = cardNumber;
            CardPin = cardPin;
            Balance = balance;
        }
        public void PrintInfo ()
        {
            Console.WriteLine ($"Cardholder is {CardHolder} with card number {CardNumber}");
        }

        public bool PinMatches(string pin)
        {
            return CardPin == pin;
        }

        public decimal GetBalance()
        {
            return Balance;
        }

        public void Deposit(decimal amount)
        {
            if (amount <= 0)
                Console.WriteLine("Deposit amount must be positive.");

            Balance += amount;
        }

        public bool Withdraw(decimal amount)
        {
            if (amount <= 0)
                return false;

            if (amount > Balance)
                return false;

            Balance -= amount;
            return true;
        }
    }
}
