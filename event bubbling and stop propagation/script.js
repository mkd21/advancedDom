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


parentDiv.addEventListener("click" , ()=>{
    console.log("Parent div clicked");
;})

child1.addEventListener("click" , () => {
    console.log("clicked on child1")
});
child2.addEventListener("click" , (e) => {
    e.stopPropagation();                    // will stop the bubbling at child 2 and the divs above child2 will not be triggered
    console.log("clicked on child2")
});
child3.addEventListener("click" , () => {
    console.log("clicked on child3")
});
child4.addEventListener("click" , () => {
    console.log("clicked on child4")
});