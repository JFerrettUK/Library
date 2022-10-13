
let myForm = document.getElementById("myForm")


function openForm() {
        document.getElementById("myForm").style.display = "grid";
}
function closeForm() {
        document.getElementById("myForm").style.display = "none";
}

// Check if tickbox was clicked, off by default
let isRead = "off";

let i = 0;

let myLibrary = [];


function resetCardHidden() {
        for (let i = 0; i < 19; i++) {
                document.getElementById(`card${i}`).style.display = "none";  
        }
}


class Book {
        constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        }
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
        let bookTest = new Book(title,author, pages, isRead);
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


// Takes input values and insets them into a relevant card, then makes that card visible
myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        deleteAdditions();
        resetCardHidden();
        addBookToLibrary(isRead);
        loopMyLibrary(myLibrary, i);
});



// Delete book button, using the number of each card's div

// DeleteAdditions() use the ExtraDel values to fix a glitch wherein deleting multiple cards would 'break' the card numbers and make refreshing not work.

let extraDel0 = 0;
let extraDel1 = 1;
let extraDel2 = 2;
let extraDel3 = 3;
let extraDel4 = 4;
let extraDel5 = 5;
let extraDel6 = 6;
let extraDel7 = 7;
let extraDel8 = 8;
let extraDel9 = 9;
let extraDel10 = 10;
let extraDel11 = 11;
let extraDel12 = 12;
let extraDel13 = 13;
let extraDel14 = 14;
let extraDel15 = 15;
let extraDel16 = 16;
let extraDel17 = 17;
let extraDel18 = 18;
let extraDel19 = 19;

function deleteAdditions() {
        for (let i = 19; i >= 0; i--) {
                if (extraDel19 == "true") {
                        myLibrary.splice(19, 1);
                        extraDel19 = 19;
                } 

                if (extraDel18 == "true") {
                        myLibrary.splice(18, 1);
                        extraDel18 = 18;
                } 

                if (extraDel17 == "true") {
                        myLibrary.splice(17, 1);
                        extraDel17 = 17;
                } 

                if (extraDel17 == "true") {
                        myLibrary.splice(17, 1);
                        extraDel17 = 17;
                } 

                if (extraDel16 == "true") {
                        myLibrary.splice(16, 1);
                        extraDel14 = 16;
                }

                if (extraDel5 == "true") {
                        myLibrary.splice(15, 1);
                        extraDel14 = 5;
                }
                
                if (extraDel14 == "true") {
                        myLibrary.splice(14, 1);
                        extraDel14 = 14;
                }

                if (extraDel13 == "true") {
                        myLibrary.splice(13, 1);
                        extraDel13 = 13;
                } 

                if (extraDel12 == "true") {
                        myLibrary.splice(12, 1);
                        extraDel12 = 12;
                }

                if (extraDel11 == "true") {
                        myLibrary.splice(11, 1);
                        extraDel11 = 11;
                }
                
                if (extraDel10 == "true") {
                        myLibrary.splice(10, 1);
                        extraDel10 = 10;
                }

                if (extraDel9 == "true") {
                        myLibrary.splice(9, 1);
                        extraDel9 = 9;
                } 

                if (extraDel8 == "true") {
                        myLibrary.splice(8, 1);
                        extraDel8 = 8;
                } 

                if (extraDel7 == "true") {
                        myLibrary.splice(7, 1);
                        extraDel7 = 7;
                } 

                if (extraDel7 == "true") {
                        myLibrary.splice(7, 1);
                        extraDel7 = 7;
                } 

                if (extraDel6 == "true") {
                        myLibrary.splice(6, 1);
                        extraDel4 = 6;
                }

                if (extraDel5 == "true") {
                        myLibrary.splice(5, 1);
                        extraDel4 = 5;
                }
                
                if (extraDel4 == "true") {
                        myLibrary.splice(4, 1);
                        extraDel4 = 4;
                }

                if (extraDel3 == "true") {
                        myLibrary.splice(3, 1);
                        extraDel3 = 3;
                } 

                if (extraDel2 == "true") {
                        myLibrary.splice(2, 1);
                        extraDel2 = 2;
                } 

                if (extraDel1 == "true") {
                        myLibrary.splice(1, 1);
                        extraDel1 = 1;
                } 

                if (extraDel0 == "true") {
                        myLibrary.splice(0, 1);
                        extraDel0 = 0;
                } 
        }
}

function deleteBook(numberDel) {
        if (extraDel0 == numberDel) {
                extraDel0 = "true";
        } 
        
        if (extraDel1 == numberDel) {
                extraDel1 = "true";
        } 
        
        if (extraDel2 == numberDel) {
                extraDel2 = "true";
        } 
        
        if (extraDel3 == numberDel) {
                extraDel3 = "true";
        } 
        
        if (extraDel4 == numberDel) {
                extraDel4 = "true";        
        } 
        
        if (extraDel5 == numberDel) {
                extraDel5 = "true";        
        } 
        
        if (extraDel6 == numberDel) {
                extraDel6 = "true";        
        }

        if (extraDel7 == numberDel) {
                extraDel7 = "true";        
        } 
        
        if (extraDel5 == numberDel) {
                extraDel8 = "true";        
        } 
        
        if (extraDel6 == numberDel) {
                extraDel9 = "true";        
        }

        if (extraDel10 == numberDel) {
                extraDel10 = "true";
        } 
        
        if (extraDel11 == numberDel) {
                extraDel11 = "true";
        } 
        
        if (extraDel12 == numberDel) {
                extraDel12 = "true";
        } 
        
        if (extraDel13 == numberDel) {
                extraDel13 = "true";
        } 
        
        if (extraDel14 == numberDel) {
                extraDel14 = "true";        
        } 
        
        if (extraDel15 == numberDel) {
                extraDel15 = "true";        
        } 
        
        if (extraDel16 == numberDel) {
                extraDel16 = "true";        
        }

        if (extraDel17 == numberDel) {
                extraDel17 = "true";        
        } 
        
        if (extraDel15 == numberDel) {
                extraDel18 = "true";        
        } 
        
        if (extraDel16 == numberDel) {
                extraDel19 = "true";        
        }

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


//replace onclick for delete

document.getElementById("delete0").addEventListener("click", function(){
        deleteBook(0);
});
     
document.getElementById("delete1").addEventListener("click", function(){
        deleteBook(1);
});

document.getElementById("delete2").addEventListener("click", function(){
        deleteBook(2);
});

document.getElementById("delete3").addEventListener("click", function(){
        deleteBook(3);
});

document.getElementById("delete4").addEventListener("click", function(){
        deleteBook(4);
});

document.getElementById("delete5").addEventListener("click", function(){
        deleteBook(5);
});

document.getElementById("delete6").addEventListener("click", function(){
        deleteBook(6);
});

document.getElementById("delete7").addEventListener("click", function(){
        deleteBook(7);
});

document.getElementById("delete8").addEventListener("click", function(){
        deleteBook(8);
});

document.getElementById("delete9").addEventListener("click", function(){
        deleteBook(9);
});
     
document.getElementById("delete10").addEventListener("click", function(){
        deleteBook(10);
});

document.getElementById("delete11").addEventListener("click", function(){
        deleteBook(11);
});

document.getElementById("delete12").addEventListener("click", function(){
        deleteBook(12);
});
        
document.getElementById("delete13").addEventListener("click", function(){
        deleteBook(13);
});

document.getElementById("delete14").addEventListener("click", function(){
        deleteBook(14);
});

document.getElementById("delete15").addEventListener("click", function(){
        deleteBook(15);
});

document.getElementById("delete16").addEventListener("click", function(){
        deleteBook(16);
});

document.getElementById("delete17").addEventListener("click", function(){
        deleteBook(17);
});

document.getElementById("delete18").addEventListener("click", function(){
gameboard.playGame(18);
});

document.getElementById("delete19").addEventListener("click", function(){
        deleteBook(19);
});
        
//changeStyle event listeners

document.getElementById("completedBox0").addEventListener("click", function(){
        changeStyle(0);
});
     
document.getElementById("completedBox1").addEventListener("click", function(){
        changeStyle(1);
});

document.getElementById("completedBox2").addEventListener("click", function(){
        changeStyle(2);
});

document.getElementById("completedBox3").addEventListener("click", function(){
        changeStyle(3);
});

document.getElementById("completedBox4").addEventListener("click", function(){
        changeStyle(4);
});

document.getElementById("completedBox5").addEventListener("click", function(){
        changeStyle(5);
});

document.getElementById("completedBox6").addEventListener("click", function(){
        changeStyle(6);
});

document.getElementById("completedBox7").addEventListener("click", function(){
        changeStyle(7);
});

document.getElementById("completedBox8").addEventListener("click", function(){
        changeStyle(8);
});

document.getElementById("completedBox9").addEventListener("click", function(){
        changeStyle(9);
});
     
document.getElementById("completedBox10").addEventListener("click", function(){
        changeStyle(10);
});

document.getElementById("completedBox11").addEventListener("click", function(){
        changeStyle(11);
});

document.getElementById("completedBox12").addEventListener("click", function(){
        changeStyle(12);
});
        
document.getElementById("completedBox13").addEventListener("click", function(){
        changeStyle(13);
});

document.getElementById("completedBox14").addEventListener("click", function(){
        changeStyle(14);
});

document.getElementById("completedBox15").addEventListener("click", function(){
        changeStyle(15);
});

document.getElementById("completedBox16").addEventListener("click", function(){
        changeStyle(16);
});

document.getElementById("completedBox17").addEventListener("click", function(){
        changeStyle(17);
});

document.getElementById("completedBox18").addEventListener("click", function(){
        changeStyle(18)
});

document.getElementById("completedBox19").addEventListener("click", function(){
        changeStyle(19);
});

//open form event listener

document.getElementById("bookButton").addEventListener("click", function(){
        openForm();
});

//close form event listener

document.getElementById("closeButton").addEventListener("click", function(){
        closeForm();
});