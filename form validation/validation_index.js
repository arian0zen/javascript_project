// const jquery = require('jquery');

console.log("This is a form validation project");

const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("mobileNo");

let validusername = false;
let validemail = false;
let validphone = false;

// let a = username.tagName
// console.log(a)

//  console.log (username, email, phone);
username.addEventListener("blur", () => {
  console.log("name is blurred");
  //validate name with reg-ex
  let regex = /^[a-zA-z]([0-9a-zA-z]){2,10}$/;
  let str = username.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("valid name");
    username.classList.remove("is-invalid");
    validusername = true;
  } else {
    console.log("invalid name");
    username.classList.add("is-invalid");
    validusername = false;  
  }
});
 
//*********/
email.addEventListener("blur", () => {
  console.log("email is blurred");
  //validate email with reg-ex
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value; 
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("valid email");
    email.classList.remove("is-invalid");
    validemail = true;
  } else {
    console.log("invalid email");
    email.classList.add("is-invalid");
    validemail = false; 
  }

});

//*********/
phone.addEventListener("blur", () => {
  console.log("phoneNo is blurred");
  //validate phoneNo with reg-ex
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("valid phoneNo");
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    console.log("invalid phoneNo");
    phone.classList.add("is-invalid");
    validphone = false;
  }

});


let submit = document.getElementById("submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("submit button is clicked"); 
    console.log(validusername, validemail, validphone);
    //submit your form here
    if(validusername && validemail && validphone){
        let fail = document.getElementById("fail");
        console.log("form is valid, submitting the forn");
        let success = document.getElementById("success");
        success.classList.add("show", "alert");
        // success.classList.remove("show" );
        $('#fail').hide();
        $('#success').show();
        

    }
    else{
        console.log("form is invalid, please correct the errors");
        let fail = document.getElementById("fail");
        let success = document.getElementById("success");
        fail.classList.add("show", "alert")
        // fail.classList.remove("show");
        $('#success').hide();
        $('#fail').show();
    
    }


    
})