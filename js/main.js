let myLibrary = [
	{
		id: 1630465,
		title: "mumbo jumbo",
		author: "ichrak",
		pages: "296",
		readingStatus: true,
	},
	{
		id: 3361646,
		title: "mumbo jumbo",
		author: "ichrak",
		pages: "296",
		readingStatus: false,
	},
];

//
const books = document.querySelector(".books");
// add new book form modal
const newBook = document.querySelector(".new-book");
const addBookBtn = document.querySelector(".add-book");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("number-of-pages");
const bookStatus = document.getElementById("reading-status");
const newBookForm = document.querySelector(".new-book-form");

// ****************************
console.log(bookTitle.value);
// ******************************

addBookBtn.addEventListener("click", () => {
	newBook.style.display = "flex";
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
	newBook.style.display = "none";
});
window.onclick = (e) => {
	if (e.target == newBook) {
		newBook.style.display = "none";
	}
};
window.addEventListener("load", (e) => Book());

// add new book to lybrary
newBookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addBookToLibrary();
	console.log(myLibrary);
});

// *********************************
function Book() {
	// the constructor...
	let bookHtml = "";
	if (myLibrary.length === 0)
		bookHtml = `<h1>THere are no books in your lybrary yet!!</h1>`;
	if (myLibrary.length > 0) {
		bookHtml = "";
		myLibrary.map((book) => {
			bookHtml += `<div class="book">
			<h3 class="book-title">${book.title}</h3>
			<h3 class="book-author">${book.author}</h3>
			<p class="book-pages">${book.pages} pages</p>
			<p class="book-status">${
				book.readingStatus ? "read" : "not read yet"
			} <button class="change-status"  onclick="changeReadingStatus(${
				book.id
			})">Change status</button></p> 
			<button class="delete-btn"  onclick="deleteBook(${
				book.id
			})">Delete</button></div>`;
		});
	}
	books.innerHTML = bookHtml;
	formReset();
}

function addBookToLibrary() {
	// do stuff here
	console.log(bookStatus);
	let item = {
		id: Math.round(Math.random() * 1000000),
		title: bookTitle.value,
		author: bookAuthor.value,
		pages: bookPages.value,
		readingStatus: bookStatus.checked,
	};
	myLibrary.push(item);
	Book();
	newBook.style.display = "none";
}

// ****** reset form *******
function formReset() {
	bookTitle.value = "";
	bookAuthor.value = "";
	bookPages.value = "";
	bookStatus.checked = false;
}

// **** change reading status
function changeReadingStatus(id) {
	myLibrary.map((book) => {
		book.id === id
			? (book.readingStatus = !book.readingStatus)
			: book.readingStatus;
	});
	Book();
}
//**** delete book from lybrary *****//
function deleteBook(id) {
	// console.log(e.dataset.id);
	myLibrary = myLibrary.filter((book) => book.id !== id);
	Book();
}
