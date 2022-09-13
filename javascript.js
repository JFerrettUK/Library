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

let i = 0;

let myLibrary = [];

function book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.cardNo = i;
        i++;
}

myForm.addEventListener("submit", (e) => {
        function addBookToLibrary(isRead) {
                let author = document.getElementById('authorInput').value;
                let title = document.getElementById('titleInput').value;
                let pages = document.getElementById('pgNoInput').value;
                function validate(){
                        let remember = document.getElementById('completedInput');
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

function loopMyLibrary(myLibrary) {
        let libraryNo = 0;

        while (libraryNo < myLibrary.length) {
                libraryNo++;
        }
}

function cardContent0(myLibrary, i) {
        let bookTitle0 = document.getElementById("bookTitle0");
        let titleText0 = document.createTextNode("This just got added");
        bookTitle0.appendChild(titleText0);

        let bookAuthor0 = document.getElementById("bookAuthor0");
        let authorText0 = document.createTextNode("This just got added");
        bookAuthor0.appendChild(authorText0);

        let pageNumber0 = document.getElementById("pageNumber0");
        let pageNoText0 = document.createTextNode("344");
        pageNumber0.appendChild(pageNoText0);

        function validate(){
                let remember = document.getElementById('completedInput');
                if (remember.checked){
                        document.getElementById("completedBox0").style.backgroundColor = "#143c79";
                        return isRead;
                } else {
                        isRead = "off";
                        document.getElementById("completedBox0").style.backgroundColor = "lightgrey";
                }
        }
        validate();
}

if (i === 0) {

}



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