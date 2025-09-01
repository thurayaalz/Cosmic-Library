const myLibrary = [
  new Book("Wuthring Heights", "Emely Bronte", 400, true),
  new Book("Ego is the Enemy", "Rayan Holiday", 260, true),
  new Book("Animal farm", "George Orwell", 400, false),
  new Book("The Soal", "Ibn Alqyim", 900, true),
];
renderB();
console.log(document.querySelector("form"));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.getElementById("newB").addEventListener("click", () => {
  const Bform = document.querySelector("form");
  Bform.style.bottom = "200px";
  Bform.style.transition = "2s";
  Bform.style.zIndex = "10";
});
document.getElementById("insertB").addEventListener("click", () => {
  const Bform = document.querySelector("form");
  Bform.style.bottom = "-1000px";
  Bform.style.transition = "2s";
});

//يظهر نافذة الدخول
const logn = document.querySelector(".logn");
const dim = document.querySelector(".dim")

document.querySelector(".sv").addEventListener("click", () => {
  logn.style.left = "30%";
  logn.style.top = "20%";
  logn.style.zIndex = "10"
  dim.style.zIndex ="9"
  logn.style.transition = "0.4s"
});

document.querySelector(".cnl").addEventListener("click", () => {
  logn.style.left = "-100px";
  logn.style.top = "-100px";
  logn.style.zIndex = "-19";
  logn.style.transition = "0.4s"
  dim.style.zIndex ="-20"
});
document.getElementById("Log").addEventListener("click", () => {
  const uName = document.getElementById("uName").value;
  let dName = document.getElementById("dName");
  if (!dName) {
    dName = document.createElement("div");
    dName.id = "dName";
    document.querySelector(".logn").appendChild(dName);
  }
  dName.innerHTML = `<strong>${uName}</strong>!`;
  
  logn.style.left = "-100px";
  logn.style.top = "-100px";
  logn.style.zIndex = "-19";
  logn.style.transition = "0.4s"
  dim.style.zIndex ="-20"
});



//to prevent the form from refreshinng the page and pass the values to obj
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const Btit = document.getElementById("Btitle").value;
  const Bauth = document.getElementById("Bauthor").value;
  const Bpages = document.getElementById("Bpages").value;
  const Bstatus = document.getElementById("Bstatus").checked;

  if (!Btit || !Bauth || !Bpages) {
    alert("Please fill in all required fields.");
    return;
  }
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

    Vbook.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <p class="status-text">Status: ${book.read ? "Read" : "Not Read Yet"}</p>
      <div class="Bchk">
        <input type="checkbox" id="Bstatus-${index}" ${
      book.read ? "checked" : ""
    }>
        <label for="Bstatus-${index}"></label>
      </div>
      <button onclick="removeBook(${index})" class="rm"></button>
    `;

    shelf.appendChild(Vbook);

    // ✅ Move this inside the loop so each book gets its own listener
    const checkbox = Vbook.querySelector(`#Bstatus-${index}`);
    const statusText = Vbook.querySelector(".status-text");

    checkbox.addEventListener("change", () => {
      book.read = checkbox.checked;
      statusText.textContent = `Status: ${book.read ? "Read" : "Not Read Yet"}`;
    });
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
