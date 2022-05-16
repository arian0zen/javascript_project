console.log("This is a news app page");

// news app api key 00851b6b7e6547f590b32a20b9442a8a
let newsAccordion = document.getElementById("newsAccordion");

// create xhr get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=00851b6b7e6547f590b32a20b9442a8a",
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let article = json.articles;
    console.log(article);
    let newsHtml = "";
    
    article.forEach(function(element, index) {
      
      let news = `
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#panelsStayOpen-collapse${index}"
      aria-expanded="true"
      aria-controls="panelsStayOpen-collapse${index}"
    >
      ${element.title}
    </button>
  </h2>
  <div
    id="panelsStayOpen-collapse${index}"
    class="accordion-collapse collapse"
    aria-labelledby="panelsStayOpen-heading${index}"
  >
    <div class="accordion-body">
      <strong>${element.description}.</strong> ${element.content} <a href="${element['url']}" target="_blank" >Read more here</a> 
    </div>
  </div>
</div> `
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
   else {
    console.log("some error occured");
  }
};

xhr.send();
