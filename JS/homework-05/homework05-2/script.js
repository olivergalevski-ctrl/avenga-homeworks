class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }

  status() {
    if ((this.readingStatus)) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    } 
    else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  }
}

const book1 = new Book("Zoki Poki", "Unknown", true);

const book2 = new Book(
  (title = prompt("Enter title")),
  (author = prompt("Enter author")),
  (readingStatus = prompt("Have you read this book? yes/no ").toLowerCase() === "yes")
);

book1.status();
book2.status();
