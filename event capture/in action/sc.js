
let parent = document.getElementById("parent");

parent.addEventListener("click" , ()=>{
    console.log("clicked");
});

let button = document.getElementById("btn");
button.addEventListener("click" , ()=>{
    console.log("clicked on button");
});



let parentDiv = document.querySelector(".parent");
let child1 = document.querySelector(".child1");
let child2 = document.querySelector(".child2");
let child3 = document.querySelector(".child3");
let child4 = document.querySelector(".child4");

let count = 0;

parentDiv.addEventListener("click" , ()=>{
    console.log("Parent div clicked");
    console.log(count);
});

child1.addEventListener("click" , () => {
    console.log("clicked on child1")
    console.log(count);
});

child2.addEventListener("click" , (e) => {

    console.log("clicked on child2")
    console.log(count);
});

child3.addEventListener("click" , () => {
    console.log("clicked on child3")
    console.log(count);
},);

child4.addEventListener("click" , () => {
    console.log("clicked on child4")
    console.log(count);
    count = 1;
    console.log(count);
    
} , {capture : true});