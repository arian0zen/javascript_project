console.log("this is projecct");

let addedParamCount = 0;

//utility function
//1. function to get element from string
function getElementFromString(string){
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}

//hid the parametersBox initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

//if user clicks on parametersBox then hide json box

let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});
//if user clicks on json box then hide parametersBox
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

//if the user clicks on + add a parametersBox
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  params = document.getElementById("params");
  let string = `
            <div class="row g-3 my-1">
            <label for="url" class="col-md-2 col-form-label">Parameter ${addedParamCount + 2}</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter parameter${addedParamCount + 2} Key">
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter parameter${addedParamCount + 2} Value">
            </div>
            <button class="col-md-2 btn btn-primary deleteParam" >-</button>
            </div>
                `;
                
let paramElement = getElementFromString(string);
params.appendChild(paramElement);
//event to - the paramElement

let deleteParam = document.getElementsByClassName('deleteParam');
for (item of deleteParam){
  item.addEventListener('click', (e) => {
    // let text = "Are you sure you want to delete?"
    
    e.target.parentElement.remove();
  })
}
addedParamCount ++;

});

//when submit button is clicked
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait in the response box at first

    //fetch all the values that uses has submitted 
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name = 'requestType']:checked").value;
    let contentType = document.querySelector("input[name = 'contentType']:checked").value;

    // these for debugging purposes
    
    //if useer has chose parameter, collect all parameters
    if (contentType == 'params'){
      data = {};
      for (i = 0; i <addedParamCount+1; i++){
        // console.log(i)
        if (document.getElementById('parameterKey'+(i+1)) != undefined){
          let key = document.getElementById('parameterKey'+(i+1)).value;
          let value = document.getElementById('parameterValue'+(i+1)).value;
          data[key] = value;
        }
      }
      data = JSON.stringify(data);
      
      // console.log(data);
    }
    else{
      data = document.getElementById('requestJsonText').value;
    }
    console.log("url is:", url);
    console.log("contentType is:", contentType);
    console.log("requestType is:", requestType);
    // console.log("data is:", data);

    //POST request if requestType is POST, by invoking fetch API to create post request
    if(requestType =="GET"){
      fetch(url, {
        method: "GET"
      })
      .then(response => response.text())
      .then((text) =>{
        //fill the response with the responseText
        document.getElementById("responseJsonText").value = text;
      })

    }
    else{
      fetch(url, {
        method: "POST",
        body: data,
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => response.text())
      .then((text) =>{
        //fill the response with the responseText
        document.getElementById("responseJsonText").value = text;
      })
    }


});