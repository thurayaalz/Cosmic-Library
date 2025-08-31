const myLibrary = [new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read"),new Book("Wuthring Heights" , "Emely Bronte" , 400 , "read")];
renderB();
console.log(document.querySelector('form'));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.getElementById("newB").addEventListener('click', ()=>{
  const Bform = document.querySelector("form")
  Bform.style.bottom ='200px';
  Bform.style.transition = '2s';
  Bform.style.zIndex = '10';
});
document.getElementById("insertB").addEventListener('click', ()=>{
  const Bform = document.querySelector("form")
  Bform.style.bottom ='-1000px';
  Bform.style.transition = '2s';
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const Btit = document.getElementById("Btitle").value;
  const Bauth = document.getElementById("Bauthor").value;
  const Bpages = document.getElementById("Bpages").value;
  const Bstatus =
    document.getElementById("Bstatus").value.toLowerCase() === "read";

  const newBook = new Book(Btit, Bauth, Bpages, Bstatus);
  myLibrary.push(newBook);
  addBookToLibrary(newBook);
});
function addBookToLibrary(newBook) {
  // take params, create a book then store it in the array
  renderB();
}

function renderB() {
  const shelf = document.querySelector(".shelf");
  shelf.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const Vbook = document.createElement("div");
    Vbook.classList.add("book");
    Vbook.innerHTML = `<h3> ${book.title}</h3>
        <p>${book.author}</p>
        <p> ${book.pages}</p>
        <p>Status ${book.read ? "Read" : "Not Read Yet"}</p> 
        <button onclick="removeBook(${index})" id="DB">Remove Book</button> `;
    shelf.appendChild(Vbook);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
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
