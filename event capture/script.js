// console.log("Js Connected....");


const parent = document.getElementById("parent");

const image = document.getElementById("image");

image.addEventListener("click" , (e) => {

    // let toggleStatus = image.dataset.switched;
    let toggleStatus = image.getAttribute("data-switched-image");

    if(toggleStatus == "0")
    {
        console.log("inside if");
        
        image.src = "img/img2.jpg";

        image.setAttribute("data-switched-image" , "1");
    }
    else 
    {
        console.log("inside else");
        
        image.src = "img/img1.jpg";

        image.setAttribute("data-switched-image" , "0");
    }

} , {capture : true});


const button = document.getElementById("btn");

parent.addEventListener("click" , ()=>{
    console.log("bubbling phase div");
});

parent.addEventListener("click" , ()=>{

    console.log("capturing phase div");

    if(parent.style.padding != "20px")
    {
        parent.style.padding = "20px";
    }
    else 
    {
        parent.style.padding = "34px";
    }
} , true);