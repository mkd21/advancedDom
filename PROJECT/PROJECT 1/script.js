let Cards = document.getElementById("cards_papa");
let messageDisplay = document.getElementById("message");

function trigger(e)
{
    
    if(e.target.id == "cards_papa" )
    {
        return;
    }
    console.log(e.target);
    // console.log(e.target.innerText);
    messageDisplay.textContent = `Your Favourite programming Language is: ${e.target.textContent}`;
}

Cards.addEventListener("click" , trigger);