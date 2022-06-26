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
            <div class="row g-3">
            <label for="url" class="col-md-2 col-form-label">Parameter ${addedParamCount + 2}</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter parameter${addedParamCount + 2} Key">
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter parameter${addedParamCount + 2} Value">
            </div>
            <button class="col-md-2 btn btn-primary" id="addParam">-</button>
            </div>
                `;
                
let paramElement = getElementFromString(string);
params.appendChild(paramElement);

addedParamCount ++;

});
