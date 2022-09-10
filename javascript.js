let completedCheck = document.querySelector(".bookButton");
let bookButton = document.querySelector(".bookButton");
let trashButton = document.querySelector(".trashButton");
let submitButton = document.querySelector(".submitButton");

function openForm() {
        document.getElementById("myForm").style.display = "grid";
}

function closeform() {
        document.getElementById("myForm").style.display = "none";
}


let myForm = document.getElementById("myForm")
myForm.addEventListener("submit", (e) => {
        console.log("Form has been submitted")
        e.preventDefault();
});


// function book(title, author, pages, isRead) {
//         bookCard.title = title;
//         bookCard.author = author;
//         bookCard.pages = pages;
//         bookCard.isRead = isRead;
//         console.log(bookCard)
//         return bookCard;
// }


let myLibrary = [];


// function book(title, author, pages, isRead) {
//         bookCard.title = title;
//         bookCard.author = author;
//         bookCard.pages = pages;
//         bookCard.isRead = isRead;
//         console.log(bookCard);
//         return bookCard;
// }

function book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
}

function addBookToLibrary() {
        author = document.getElementById('authorInput').value;
        console.log(author);
        title = document.getElementById('titleInput').value;
        pages = document.getElementById('pgNoInput').value;
        isRead = document.getElementById('completedInput').value;
        let book1 = new book(title, author, pages, isRead);
        console.log(book1);
        return book1;
}

function deleteBook() {

}

