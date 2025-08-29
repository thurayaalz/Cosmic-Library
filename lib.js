const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  // take params, create a book then store it in the array
  myLibrary.push(bookObj);
  renderB();
}

function renderB() {
  const shelf = document.querySelector(".shelf");
  shelf.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const book = document.createElement("div");
    book.classList.add("book");
    book.innerText = `<h3> ${book.title}</h3>
        <p>${book.authur}</p>
        <p> ${book.pages}</p>
        <p>Status ${book.read ? "Read" : "Not Read Yet"}</p> 
        <button onclick="removeBook(${index})" id="DB">Remove Book</button> `;
    shelf.appendChild(book);
  });
}
function removeBook(index){
myLibrary.splice(index , 1);
renderB();
}

// BACKGROUND -------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const Bub = document.querySelector(".inter");
  let cX = 0;
  let cY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    cX += (tgX - cX) / 20;
    cY += (tgY - cY) / 20;
    Bub.style.transform = `translate(${Math.round(cX)}px , ${Math.round(
      cY
    )}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });
  move();
});
