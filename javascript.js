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

document.querySelector('#authorInput').value = 'Twain';
document.querySelector('#titleInput').value = 'Mark';
document.querySelector('#pgNoInput').value = '233';

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
        console.log(i);
        myLibrary.forEach((book, i) => {
                let titleText = document.createTextNode(book.title);
                document.getElementById(`bookTitle${i}`).textContent = titleText.data ;

                let authorText = document.createTextNode(book.author);
                document.getElementById(`bookAuthor${i}`).textContent = authorText.data ;

                let pageNoText = document.createTextNode(book.pages);
                document.getElementById(`pageNumber${i}`).textContent = pageNoText.data ;

                function validate(){
                        let remember = document.getElementById(`completedInput`);
                        if (remember.checked) {
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "#143c79";
                                return isRead;
                        } else {
                                isRead = "off";
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "lightgrey";
                        }
                }
                validate();
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

function deleteBook0() {
        document.getElementById("card0").style.display = "none";
        myLibrary.splice(0, 1);
}

function deleteBook1() {
        document.getElementById("card1").style.display = "none";
        myLibrary.splice(1, 1);
}

function deleteBook2() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(2, 1);
}

function deleteBook3() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(3, 1);
}

function deleteBook4() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(4, 1);
}

function deleteBook5() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(5, 1);
}

function deleteBook6() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(6, 1);
}

function deleteBook7() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(7, 1);
}

function deleteBook8() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(8, 1);
}

function deleteBook9() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(9, 1);
}

function deleteBook10() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(10, 1);
}

function deleteBook11() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(11, 1);
}

function deleteBook12() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(12, 1);
}

function deleteBook13() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(13, 1);
}

function deleteBook14() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(14, 1);
}

function deleteBook15() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(15, 1);
}

function deleteBook16() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(16, 1);
}

function deleteBook17() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(17, 1);
}

function deleteBook18() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(18, 1);
}

function deleteBook19() {
        document.getElementById("card2").style.display = "none";
        myLibrary.splice(19, 1);
}