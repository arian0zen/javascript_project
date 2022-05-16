console.log('this is a js file');
let fakeApi =
{
    "word": "example",
    "results": [
        {
            "definition": "a representative form or pattern",
            "partOfSpeech": "noun",
            "synonyms": [
                "model"
            ],
            "typeOf": [
                "representation",
                "internal representation",
                "mental representation"
            ],
            "hasTypes": [
                "prefiguration",
                "archetype",
                "epitome",
                "guide",
                "holotype",
                "image",
                "loadstar",
                "lodestar",
                "microcosm",
                "original",
                "paradigm",
                "pilot",
                "prototype",
                "template",
                "templet",
                "type specimen"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "I profited from his example"
            ]
        },
        {
            "definition": "something to be imitated",
            "partOfSpeech": "noun",
            "synonyms": [
                "exemplar",
                "good example",
                "model"
            ],
            "typeOf": [
                "ideal"
            ],
            "hasTypes": [
                "pacemaker",
                "pattern",
                "beauty",
                "prodigy",
                "beaut",
                "pacesetter"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ]
        },
        {
            "definition": "an occurrence of something",
            "partOfSpeech": "noun",
            "synonyms": [
                "case",
                "instance"
            ],
            "typeOf": [
                "happening",
                "natural event",
                "occurrence",
                "occurrent"
            ],
            "hasTypes": [
                "clip",
                "mortification",
                "piece",
                "time",
                "humiliation",
                "bit"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "but there is always the famous example of the Smiths"
            ]
        },
        {
            "definition": "an item of information that is typical of a class or group",
            "partOfSpeech": "noun",
            "synonyms": [
                "illustration",
                "instance",
                "representative"
            ],
            "typeOf": [
                "information"
            ],
            "hasTypes": [
                "excuse",
                "apology",
                "specimen",
                "case in point",
                "sample",
                "exception",
                "quintessence",
                "precedent"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ],
            "examples": [
                "this patient provides a typical example of the syndrome",
                "there is an example on page 10"
            ]
        },
        {
            "definition": "punishment intended as a warning to others",
            "partOfSpeech": "noun",
            "synonyms": [
                "deterrent example",
                "lesson",
                "object lesson"
            ],
            "typeOf": [
                "monition",
                "admonition",
                "word of advice",
                "warning"
            ],
            "derivation": [
                "exemplary"
            ],
            "examples": [
                "they decided to make an example of him"
            ]
        },
        {
            "definition": "a task performed or problem solved in order to develop skill or understanding",
            "partOfSpeech": "noun",
            "synonyms": [
                "exercise"
            ],
            "typeOf": [
                "lesson"
            ],
            "examples": [
                "you must work the examples at the end of each chapter in the textbook"
            ]
        }
    ],
    "syllables": {
        "count": 3,
        "list": [
            "ex",
            "am",
            "ple"
        ]
    },
    "pronunciation": {
        "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
}

console.log(fakeApi);
console.log(typeof (fakeApi));

console.log(fakeApi.results);
let arr = fakeApi.results;
console.log(typeof (arr));

// for(key in newStudent){
// arr.forEach(function (arr) {
//     enrollStudent(arr, getStudents);
// });

//making the search bar functional
// let search = document.getElementsByClassName('search');

// console.log(search);
// // let input2 = document.getElementById('inut2');
// // console.log(input2);
// console.log(search.value);

let meanings = document.getElementById('meanings');
console.log(meanings);
meanings.addEventListener('click', () => {
    console.log("someone clicked meanings")
    populate();
})

// let def = arr.definition;

// console.log(def);
// console.log(arr)
// console.log(fakeApi.results);
// console.log(fakeApi.results.definition);

// function populate(){
//     let arr = fakeApi.results;
//     let html = '<h2> The definitions are: </h2>';
//     arr.forEach(arr => {
//         html += `
//         <li>${arr.definition}</li>`

//     });
//     let listed = document.getElementById('list');
//     listed.innerHTML = html;
// }

//declaring search function

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

    let inputval = search.value.toLowerCase();
    console.log('Now i am searching something', inputval);
    // // let noteCards = document.getElementsByClassName('noteCard');
    // // Array.from(noteCards).forEach(function(element){
    // //     let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // //     let titleTxt = element.getElementsByTagName("h5")[0].innerText;
    // //     if (cardTxt.includes(inputval) ||  titleTxt.includes(inputval)) {
    // //         element.style.display = "block";
    // //     }

    // //     else {
    // //         element.style.display = "none";
    // //     }
    // }
let alert = '';
    if (inputval.includes("example")) {
        console.log("There is welcome");
        populate();
    }
    else{
        alert += ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Message: </strong> The word ${inputval} is not found.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.getElementById('alert').innerHTML = alert;
    }
}

);

function populate(){
        let arr = fakeApi.results;
        let html = '<h2> The definitions are: </h2>';
        arr.forEach(arr => {
            html += `
            <li>${arr.definition}</li>`
    
        });
        let listed = document.getElementById('list');
        listed.innerHTML = html;
    }