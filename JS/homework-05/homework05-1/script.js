class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  speak() {
    const text = prompt(`What does ${this.name} the ${this.kind} says?`);
    console.log(`${this.kind} says: ${text}`);
  }
}

const dog = new Animal("Dzeki", "dog");
dog.speak();

const cat = new Animal("Branko", "cat");
cat.speak();

const cow = new Animal("Milka", "cow");
cow.speak();

const animal = new Animal(
  (a = prompt("What is the name of the animal?")),
  (b = prompt("What is the kind of the animal?"))
);
animal.speak();