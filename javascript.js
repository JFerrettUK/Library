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
                document.getElementById(`card${i}`).style.display = "grid";  
                i++;
              })
}

// let nextDigit = 0;
// let nextDigit2 = 0;

// let length = myLibrary.length;

// function checkLength() {
//         length = myLibrary.length;
// }

// function getLength() {
//         if (length == 0) {
//                 nextDigit = 1;
//                 nextDigit2 = 2;
//         } else if (length == 1) {
//                 nextDigit = 2;
//                 nextDigit2 = 3;
//         } else if (length == 2) {
//                 nextDigit = 3;
//                 nextDigit2 = 4;
//         } else if (length == 3) {
//                 nextDigit = 4;
//                 nextDigit2 = 5;
//         } else if (length == 4) {
//                 nextDigit = 5;
//                 nextDigit2 = 6;
//         } else if (length == 5) {
//                 nextDigit = 6;
//                 nextDigit2 = 7;
//         }
// }

// function deleteExtraCards() {
//         value1 = nextDigit;
//         value2 = nextDigit2;
//         console.log(value1);
//         document.getElementById(`card${value1}`).style.display = "none";  
//         document.getElementById(`card${value2}`).style.display = "none";  
// }

// function deleteExtra() {
//         checkLength()
//         getLength()
//         deleteExtraCards();
// }


// Takes input values and insets them into a relevant card, then makes that card visible
myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addBookToLibrary(isRead);
        loopMyLibrary(myLibrary, i);
});

// Delete book button, using the number of each card's div
function deleteBook(numberDel) {
        myLibrary.splice(`${numberDel}`, 1);
        document.getElementById(`card${numberDel}`).style.display = "none";  
}


//Changes the Completed? button colour and updates the myLibrary array with the new value
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


