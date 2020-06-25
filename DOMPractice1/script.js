//console.log('Hello World');
// target the body.
let body = document.body;
let allH1s = document.querySelectorAll('h1');

addAllListeners(allH1s);

function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        if(param[i].innerhtml === "jour"){ 
            param[i].addEventListener('click', change)
        } else{
           param[i].addEventListener('click', hit);
        }
    }


}

function hit(event){
    console.log(event.target);
}

console.log(allH1s);