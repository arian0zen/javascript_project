console.log("This is me ");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTtl = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }

  let titleObject ={
  title : addTitle.value,
  text : addTxt.value
  }

  notesObject.push(titleObject);
  localStorage.setItem("notes", JSON.stringify(notesObject));
  addTxt.value = "";
  addTtl.value = "";
  console.log(notesObject);
  showNotes();
});





function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }
  let html = "";
  notesObject.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObject.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}



function deleteNote(index) {
  console.log(`i am deleting`, Number(index + 1));
  let notes = localStorage.getItem("notes");
  



  if (notes == null) {
    notesObject = [];
  } else {
    notesObject = JSON.parse(notes);
  }
  notesObject.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObject));
  showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputval = search.value.toLowerCase();
    console.log('Now i am searching something', inputval );
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let titleTxt = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputval) ||  titleTxt.includes(inputval)) {
            element.style.display = "block";
        }

        else {
            element.style.display = "none";
        }
    })

})



/* 
add title (done)
mark a note as important
*/



