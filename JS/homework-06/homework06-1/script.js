
const paragraphs = document.querySelectorAll("p");


paragraphs.forEach((p, index) => {
  p.textContent = `Paragraph ${index + 1} was changed with JavaScript`;
});


const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");


headers.forEach((header, index) => {
  header.textContent = `Header ${index + 1} was changed with JavaScript`;
});


const text = document.querySelector("text");

text.textContent = `Text was changed with JavaScript`;