function openForm() {
        document.getElementById("myForm").style.display = "grid";
}
function closeform() {
        document.getElementById("myForm").style.display = "none";
}

// Stops Submit button from refreshing the page
let myForm = document.getElementById("myForm")
myForm.addEventListener("submit", (e) => {
        console.log("Form has been submitted")
        e.preventDefault();
});

// Check if tickbox was clicked, off by default
let isRead = "off";

let myLibrary = [];

function book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
}

myForm.addEventListener("submit", (e) => {
        function addBookToLibrary(isRead) {
                let author = document.getElementById('authorInput').value;
                let title = document.getElementById('titleInput').value;
                let pages = document.getElementById('pgNoInput').value;
                function validate(){
                        var remember = document.getElementById('completedInput');
                        if (remember.checked){
                                isRead = "on";
                                return isRead;
                        } else {
                                isRead = "off";
                                return isRead;
                        }
                }
                validate();
                let bookTest = new book(title,author, pages, isRead);
                myLibrary.push(bookTest);
                document.querySelector('#authorInput').value = '';
                document.querySelector('#titleInput').value = '';
                document.querySelector('#titleInput').value = '';
        }
        addBookToLibrary(isRead);
});

function deleteBook0() {
        document.getElementById("card0").style.display = "none";
}
function deleteBook1() {
        document.getElementById("card1").style.display = "none";
}
function deleteBook2() {
        document.getElementById("card2").style.display = "none";
}
function deleteBook3() {
        document.getElementById("card3").style.display = "none";
}
function deleteBook4() {
        document.getElementById("card4").style.display = "none";
}