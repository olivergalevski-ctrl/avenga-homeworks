
namespace Task01
{
    public class Car
    {
       public string Model { get; set; }
       public int Speed { get; set; }
       public Driver Driver { get; set; }


        public double CalculateSpeed()
        {
            return Driver.Skill * Speed;
        }

        public override string ToString()
        {
            return Model;
        }
    }
}
