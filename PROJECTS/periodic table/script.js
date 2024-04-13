document.addEventListener("DOMContentLoaded" , () => {

    let parentDiv = document.getElementById("parent");
    for(let i = 1; i <=50; i++)
    {
        let childDivs = document.createElement("div");
        childDivs.setAttribute("class" , "child");
        childDivs.setAttribute("data-Atomic-Number" , i);
        if(i == 45)
        {
            childDivs.setAttribute("class" , "special");
        }
        childDivs.textContent = `Elem ${i}`;
        childDivs.classList.add("child");
        parentDiv.appendChild(childDivs);
    }

    let childDiv = document.querySelectorAll(".child");

    childDiv.forEach( (val) =>{
        val.addEventListener("click" , (e)=>{
            alert(`Element is ${e.target.textContent} \n Atomic Number is: ${val.getAttribute("data-Atomic-Number")}`);
        });
    });
});