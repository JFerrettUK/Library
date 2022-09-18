function openForm() {
        document.getElementById("myForm").style.display = "grid";
}
function closeform() {
        document.getElementById("myForm").style.display = "none";
}

let myForm = document.getElementById("myForm")

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
}

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
        document.querySelector('#pgNoInput').value = '';
}


function loopMyLibrary(myLibrary, i) {

        myLibrary.forEach((book, i) => {
                let titleText = document.createTextNode(book.title);
                document.getElementById(`bookTitle${i}`).textContent = titleText.data ;

                let authorText = document.createTextNode(book.author);
                document.getElementById(`bookAuthor${i}`).textContent = authorText.data ;

                let pageNoText = document.createTextNode(book.pages);
                document.getElementById(`pageNumber${i}`).textContent = pageNoText.data ;

                let isReadValue = book.isRead;

                function validate(isReadValue){
                        if (isReadValue == "on") {
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "#143c79";
                        } else {
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "lightgrey";
                        }
                        
                }
                validate(isReadValue);
                function checkDeletion(i) {
                        document.getElementById(`card${i}`).style.display = "grid";  
                }
                checkDeletion(i);
                i++;
              })
}

myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addBookToLibrary(isRead);
        loopMyLibrary(myLibrary, i)
});

function deleteBook(numberDel) {
        document.getElementById(`card${i}`).style.display = "none";
        myLibrary.splice(`${numberDel}`, 1);
}

function changeStyle(number){
        let findColor = document.getElementById(`completedBox${number}`).style.backgroundColor;        
        if (findColor == "rgb(20, 60, 121)") {
                document.getElementById(`completedBox${number}`).style.backgroundColor = "lightgrey";
        } else {
                document.getElementById(`completedBox${number}`).style.backgroundColor = "#143c79";
        }

        myLibrary.forEach((book, number) => {
                let findColor = document.getElementById(`completedBox${number}`).style.backgroundColor;        
                if (findColor == "lightgrey") {
                        book.isRead = "off";
                } else {
                        book.isRead = "on";
                }
        })    
}


