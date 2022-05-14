console.log("this is index for library");

function Book(name, author, type) {
  this.bookName = name;
  this.bookAuthor = author;
  this.bookType = type;
}

function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                        <td>${book.bookName}</td>
                        <td>${book.bookAuthor}</td>
                        <td>${book.bookType}</td>
                    </tr>`;

  tableBody.innerHTML += uiString;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.bookName.length < 2 || book.bookAuthor.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let alertMessage = document.getElementById("message");
  alertMessage.innerHTML = `
                             <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message: </strong> ${displayMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;

    setTimeout(function(){
        alertMessage.innerHTML = ''
    }, 4000);
};

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("You have submitted the library form");
  let name = document.getElementById("bookName").value.toUpperCase();
  let author = document.getElementById("author").value.toUpperCase();

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value.toUpperCase();
  } else if (programming.checked) {
    type = programming.value.toUpperCase();
  } else if (cooking.checked) {
    type = cooking.value.toUpperCase();
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", ' Your form has been succesfully submitted!');
  } else {
    console.log("error");
    display.show("danger", " Sorry!! You can't add this book");
  }

  e.preventDefault();
}




// local storage
let addBtn = document.getElementById('addBtn');
function localStore(){
let storedBook = JSON.parse(localStorage.getItem('oldstoredBook')) || [];
let addBook = document.getElementById("bookName");
// if(document.getElementById("bookName").length>2){
//     addBook = document.getElementById("bookName");
// }
// else{
//     console.log('book name is too little');
// }

let addAuthor = document.getElementById("author");
// if(document.getElementById('author').length>2){
//     addAuthor = document.getElementById("author");
// }
// else{
//     console.log("author name is")
// }

// let addedBook = '';
// if(addBook.length>2){
//     addedBook = addBook.value;
// }
// else{
//     addedBook = '';
// }
// let addedAuthor = '';
// if (addAuthor.length>2){
//     addedAuthor = addAuthor.value;
// }
// else{
//     addedAuthor = '';
// }

let newBooks = {
   'booknamed' : addBook.value,
   'authornamed' : addAuthor.value
};
storedBook.push(newBooks);
localStorage.setItem('oldstoredBook', JSON.stringify(storedBook));
console.log(storedBook);

}

// function showNotes() {
//     let storedBook = JSON.parse(localStorage.getItem('oldstoredBook')) || [];

//     // let html = "";
//     tableBody = document.getElementById("tableBody");
//     storedBook.forEach(function (element , index) {
//         let uiString = `<tr>
//         <td>${element.booknamed}</td>
//         <td>${element.authornames}</td>
        
//     </tr>`;

// tableBody.innerHTML += uiString;
//     });
//     let bodyElm = document.getElementById("secondBody");

//     if (storedBook.length != 0) {
//       bodyElm.innerHTML = uiString;
//     } else {
//       bodyElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
//   }



    // localStorage.setItem("bLibrary", JSON.stringify(bLibraryObject));
    // let storedBook = localStorage.getItem('oldStoredBook');
    // console.log(storedBook);
    // if (oldStored == null) {
    //     bLibraryObject = [];
    // } else {
    //     bLibraryObject = JSON.parse(bLibrary);
    // }
  
    // let libraryBooksObject = {
    //   nameOfBook: bName.value,
    //   nameOfAuthor: bAuthor.value
    // };
  
    // bLibraryObject.push(libraryBooksObject);
    // localStorage.setItem("bLibrary", JSON.stringify(bLibraryObject));
    // bName.value = "";
    // bAuthor.value = "";
    // console.log(bLibraryObject);
    
 


  //show notes function

//   function showNotes() {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       notesObject = [];
//     } else {
//       notesObject = JSON.parse(notes);
//     }
//     let html = "";
//     notesObject.forEach(function (element, index) {
//       html += `
//               <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                       <div class="card-body">
//                           <h5 class="card-title">${element.title}</h5>
//                           <p class="card-text"> ${element.text}</p>
//                           <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Note</button>
//                           <button id="${index}" onclick="markImp(this.id)" class="btn btn-sm btn-outline-danger">Mark as important</button>
//                       </div>
//                   </div>`;
//     });
//     let notesElm = document.getElementById("notes");
//     if (notesObject.length != 0) {
//       notesElm.innerHTML = html;
//     } else {
//       notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
//   }