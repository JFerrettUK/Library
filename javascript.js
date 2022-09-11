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

// Check if tickbox was clicked

let isRead = "off";

    
let myLibrary = [];

function book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
}

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
}

function deleteBook() {

}

