console.log('bonjour');

let allElement = document.querySelectorAll('div');
let popUp = document.querySelector('.div');

addClicks(allElement);

function addClicks(arr){
    //console.log(param);
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', changeColor);
    }
}

function changeColor(event){
    console.log(event.target.innerHTML)
    document.body.style.color = `${event.target.innerHTML}`
}

console.log(event);