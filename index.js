console.log(document.title);
document.title='DOM-basics';
console.log(document.title);

let text = document.getElementById("main");
console.log(text);

let text1 = document.getElementsByTagName("h2");
console.log(text1[0]);


const select = document.getElementsByClassName("dom");
console.log(select); 

const select1 = document.querySelector(".dom");
console.log(select1);

const select2 = document.querySelectorAll(".dom ");
console.log(select2);