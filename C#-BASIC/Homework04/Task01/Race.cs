namespace Task01
{
    public class Race
    {
        public Car RaceCars(Car car1, Car car2)
        {
            return car1.CalculateSpeed() > car2.CalculateSpeed() ? car1 : car2;
        }

    }
}
