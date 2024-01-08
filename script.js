// №1

const books = document.querySelector(".books");
const book1 = books.children[1];
const book2 = books.children[0];
const book3 = books.children[4];
const book4 = books.children[3];
const book5 = books.children[5];
const book6 = books.children[2];

books.insertAdjacentElement("afterbegin", book1);
book4.insertAdjacentElement("beforebegin", book3);
book5.insertAdjacentElement("afterend", book6);

//№2

const body = document.querySelector("body");
body.style = "background-image: url(./image/you-dont-know-js.jpg);";

//№3

book3.children[0].children[0].innerHTML = "Книга 3. this и Прототипы Объектов";

//№4

const adv = document.querySelector(".adv");
body.removeChild(adv);

//№5
const PREFACE = "Предисловие";
const INTRODUCTION = "Введение";
const CHAPTER = "Глава";
const APPENDIX = "Приложение";

function selectUnsortedList(unsortedChapter) {
  const allBooks = document.querySelectorAll(".book");
  const newUl = [];

  allBooks.forEach((element, index) => {
    if (element.querySelector("h2").innerText == unsortedChapter) {
      const ul = element.querySelector("ul");
      const li = element.querySelectorAll("li");
      ul.remove();
      intro(li, newUl, allBooks[index]);
    }
  });
}

function intro(li, array, unsortedBook) {
  li.forEach((element) => {
    if (element.innerText === INTRODUCTION) {
      array.push(element.innerText);
    }
    if (element.innerText === PREFACE) {
      array.push(element.innerText);
    }
  });
  chapters(li, array, unsortedBook);
}

function chapters(li, array, unsortedBook) {
  const unsortedArray = [];
  li.forEach((element) => {
    if (element.innerText.includes(CHAPTER)) {
      unsortedArray.push(element.innerText);
    }
  });
  unsortedArray.sort();
  unsortedArray.forEach((element) => {
    array.push(element);
  });
  upd(li, array, unsortedBook);
}

function upd(li, array, unsortedBook) {
  const unsortedArray = [];
  li.forEach((element) => {
    if (element.innerText.includes(APPENDIX)) {
      unsortedArray.push(element.innerText);
    }
  });
  unsortedArray.sort();
  unsortedArray.forEach((element) => {
    array.push(element);
  });
  createNewList(array, unsortedBook);
}

function createNewList(array, unsortedBook) {
  const newUl = document.createElement("ul");
  array.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element;
    newUl.appendChild(newLi);
  });
  unsortedBook.appendChild(newUl);
}

selectUnsortedList("Книга 2. Область видимости и замыкания");
selectUnsortedList("Книга 5. Асинхронность и Производительность");

//№6

function insertLastChapter(book, chapterName) {
  liArray = book.querySelectorAll("li");
  let lastChapter = document.createElement("li");
  lastChapter.innerText = chapterName;
  liArray.forEach((element) => {
    if (element.innerText.includes(APPENDIX)) {
      element.insertAdjacentElement("beforebegin", lastChapter);
    }
  });
}

insertLastChapter(book6, "Глава 8: За пределами ES6");
