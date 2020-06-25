console.log('Good Day');
let allElements = document.querySelectorAll('div');

addClicks(allElements);

function addClicks(arr){
    for(let i = 0; i < arr.length; i++){  
        arr[i].addEventListener('click', changeColor);
        console.log(arr[i]);
        
    }
}

function changeColor(event){
    console.log(event.target.innerHTML);
    document.body.style.color = `${event.target.innerHTML}`;
}    // document.body.setAttribute('style', `color: ${event.target.innerHTML`})

//console.log(event);