const myLibrary = [];
console.log("??????????????????");
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  

function addBookToLibrary() {
  // take params, create a book then store it in the array
  const book = document.createElement("div");
  book.classList.add("book");
}

// BACKGROUND --------------

document.addEventListener('DOMContentLoaded', () => {
  const Bub = document.querySelector('.inter');
  let cX = 0;
  let cY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    cX += (tgX - cX) / 20;
    cY += (tgY - cY) / 20;
    Bub.style.transform =
      `translate(${Math.round(cX)}px , ${Math.round(cY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });
  move();
});
