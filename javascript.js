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



let myLibrary = [];

function book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
}

function addBookToLibrary() {

        console.log("test")
      
}

function deleteBook() {

}

