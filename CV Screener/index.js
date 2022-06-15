 console.log("this is cv project js")


 //data is the cv

 const data = [
    {
        name: 'Arian',
        age: '21',
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/75.jpg'

    },
    {
        name: 'Raju',
        age: '31',
        city: 'Kuala',
        language: 'Js',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/45.jpg'

    },
    {
        name: 'Rohit',
        age: '51',
        city: 'Falta',
        language: 'Python',
        framework: 'vue.js',
        Image: 'https://randomuser.me/api/portraits/men/21.jpg'

    },
 ]



 //cv iterator
 //ternary function google it
 function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done: true}
        }
    }

 }

 //button listener for next button
 const candidates = cvIterator(data)
 nextCV();
 const next = document.getElementById('next');
 next.addEventListener('click', nextCV);
 function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.Image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;

 }
    else{
        alert("end of cv's");
        window.location.reload();
    }

}
