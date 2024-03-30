// console.log("Js Connected....");


const parent = document.getElementById("parent");

const image = document.getElementById("image");

image.addEventListener("click" , (e) => {
    
    e.stopPropagation();   // will stop the propagation of event outside the image tag
    // let toggleStatus = image.dataset.switched;
    let toggleStatus = image.getAttribute("data-switched-image");

    console.log(toggleStatus);
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
    console.log(toggleStatus);
});

const button = document.getElementById("btn");

function exec()
{
    if(parent.style.display != "none")
    {
        parent.style.display = "none";
    }
    else 
    {
        parent.style.display = "block";
    }
}

button.onclick = exec;


// now to see the bubbling effect we will give same property to parent div of image also 

parent.onclick = exec;

// even if it is given of parent then also clicking on image makes the div go dislay none. 
// div ka v event trigger ho rha hai image pr click krne se

// event bubbling yhi to hai 
