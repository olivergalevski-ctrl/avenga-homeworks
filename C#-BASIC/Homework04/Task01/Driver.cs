
using System.Reflection;

namespace Task01
{
    public class Driver
    {
        public string Name { get; set; }
        public int Skill {  get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
