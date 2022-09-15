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
                console.log(i);
                let bookTitle = document.getElementById(`bookTitle${i}`);
                let titleText = document.createTextNode(book.title);
                bookTitle.appendChild(titleText);

                let bookAuthor = document.getElementById(`bookAuthor${i}`);
                let authorText = document.createTextNode(book.author);
                bookAuthor.appendChild(authorText);

                let pageNumber = document.getElementById(`pageNumber${i}`);
                let pageNoText = document.createTextNode(book.pages);
                pageNumber.appendChild(pageNoText);

                function validate(){
                        let remember = document.getElementById(`completedInput`);
                        if (remember.checked){
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "#143c79";
                                return isRead;
                        } else {
                                isRead = "off";
                                document.getElementById(`completedBox${i}`).style.backgroundColor = "lightgrey";
                        }
                }
                validate();
                console.log(`deletePause${i}`);
                function checkDeletion(i) {
                        if (`deletePause${i} === "true"`) {
                                document.getElementById(`card${i}`).style.display = "grid";  
                        } else if (`deletePause${i} === "false"`) {
                                document.getElementById(`card${i}`).style.display = "none";  

                        }
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


// function cardContent0(myLibrary, i) {
//         let bookTitle0 = document.getElementById("bookTitle0");
//         let titleText0 = document.createTextNode("This just got added");
//         bookTitle0.appendChild(titleText0);

//         let bookAuthor0 = document.getElementById("bookAuthor0");
//         let authorText0 = document.createTextNode("This just got added");
//         bookAuthor0.appendChild(authorText0);

//         let pageNumber0 = document.getElementById("pageNumber0");
//         let pageNoText0 = document.createTextNode("344");
//         pageNumber0.appendChild(pageNoText0);

//         function validate(){
//                 let remember = document.getElementById('completedInput');
//                 if (remember.checked){
//                         document.getElementById("completedBox0").style.backgroundColor = "#143c79";
//                         return isRead;
//                 } else {
//                         isRead = "off";
//                         document.getElementById("completedBox0").style.backgroundColor = "lightgrey";
//                 }
//         }
//         validate();
// }

// if (i === 0) {

// }

let deletePause0 = "false";
let deletePause1 = "false";
let deletePause2 = "false";
let deletePause3 = "false";
let deletePause4 = "false";
let deletePause5 = "false";
let deletePause6 = "false";
let deletePause7 = "false";
let deletePause8 = "false";
let deletePause9 = "false";
let deletePause10 = "false";
let deletePause11 = "false";
let deletePause12 = "false";
let deletePause13 = "false";
let deletePause14 = "false";
let deletePause15 = "false";
let deletePause16 = "false";
let deletePause17 = "false";
let deletePause18 = "false";
let deletePause19 = "false";


function deleteBook0() {
        document.getElementById("card0").style.display = "none";
        deletePause0 = "true";
        return deletePause0;
}

function deleteBook1() {
        document.getElementById("card1").style.display = "none";
        deletePause1 = "true";
        return deletePause1;
}

function deleteBook2() {
        document.getElementById("card2").style.display = "none";
        deletePause2 = "true";
        return deletePause2;
}

function deleteBook3() {
        document.getElementById("card3").style.display = "none";
        deletePause3 = "true";
        return deletePause3;
}

function deleteBook4() {
        document.getElementById("card4").style.display = "none";
        deletePause4 = "true";
        return deletePause4;
}

function deleteBook5() {
        document.getElementById("card5").style.display = "none";
        deletePause5 = "true";
        return deletePause5;
}

function deleteBook6() {
        document.getElementById("card6").style.display = "none";
        deletePause6 = "true";
        return deletePause6;
}

function deleteBook7() {
        document.getElementById("card7").style.display = "none";
        deletePause7 = "true";
        return deletePause7;
}

function deleteBook8() {
        document.getElementById("card8").style.display = "none";
        deletePause8 = "true";
        return deletePause8;
}

function deleteBook9() {
        document.getElementById("card9").style.display = "none";
        deletePause9 = "true";
        return deletePause9;
}

function deleteBook10() {
        document.getElementById("card10").style.display = "none";
        deletePause10 = "true";
        return deletePause10;
}

function deleteBook11() {
        document.getElementById("card11").style.display = "none";
        deletePause11 = "true";
        return deletePause11;
}

function deleteBook12() {
        document.getElementById("card12").style.display = "none";
        deletePause12 = "true";
        return deletePause12;
}

function deleteBook13() {
        document.getElementById("card13").style.display = "none";
        deletePause13 = "true";
        return deletePause13;
}

function deleteBook14() {
        document.getElementById("card14").style.display = "none";
        deletePause14 = "true";
        return deletePause14;
}

function deleteBook15() {
        document.getElementById("card15").style.display = "none";
        deletePause15 = "true";
        return deletePause15;
}

function deleteBook16() {
        document.getElementById("card16").style.display = "none";
        deletePause16 = "true";
        return deletePause16;
}

function deleteBook17() {
        document.getElementById("card17").style.display = "none";
        deletePause17 = "true";
        return deletePause17;
}

function deleteBook18() {
        document.getElementById("card18").style.display = "none";
        deletePause18 = "true";
        return deletePause18;
}

function deleteBook19() {
        document.getElementById("card19").style.display = "none";
        deletePause19 = "true";
        return deletePause19;
}