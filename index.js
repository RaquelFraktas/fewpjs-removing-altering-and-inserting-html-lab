// Write your code here!
document.querySelector("main#main").remove();

// let newHeader=document.querySelector("h1#victory");
// let newHeader =h1.document.createId('victory')
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

newHeader.innerHTML= ` ${name} is the champion`