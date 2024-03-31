document.addEventListener("DOMContentLoaded" , ()=>{

    let parent = document.getElementById("parent");
    let gameStatus = false;
    let arr = new Array(9).fill();
    console.log(arr);
    parent.addEventListener("click" , (e) => {

        let targetTile = e.target;

        // if gamestatus is false then put O and if true then put X
        if(targetTile != parent)
        {

            if(targetTile.getAttribute("data-visited"))
            {
                return;
            }

            if(!gameStatus)
            {
                targetTile.textContent = "O";
                arr[targetTile.getAttribute("data-blockNumber")] = "O";
                targetTile.setAttribute("data-visited" , "true");
                combinationChecker("O");
            }
            else 
            {
                targetTile.textContent = "X";
                arr[targetTile.getAttribute("data-blockNumber")] = "X";
                targetTile.setAttribute("data-visited" , "true");
                combinationChecker("X");
            }

            gameStatus = !gameStatus;
        }

        console.log(arr);


        function combinationChecker(character)
        {
            // for rows 
            if(arr[0] == character && arr[1] == character && arr[2] == character)    // 1st row
            {
                console.log(`${character} is winner`);
            }
            else if(arr[3] == character && arr[4] == character && arr[5] == character)   // 2nd row
            {
                console.log(`${character} is winner`);
            }
            else if(arr[6] == character && arr[7] == character && arr[8] == character)  // 3rd row
            {
                console.log(`${character} is winner`);
            }

            // for columns 
            else if(arr[0] == character && arr[3] == character && arr[6] == character)  // 1st column
            {
                console.log(`${character} is winner`);
            }
            else if(arr[1] == character && arr[4] == character && arr[7] == character)  // 2nd column
            {
                console.log(`${character} is winner`);
            }
            else if(arr[2] == character && arr[5] == character && arr[8] == character)  // 3rd column
            {
                console.log(`${character} is winner`);
            }


            // for diagonals 
            else if(arr[0] == character && arr[4] == character && arr[8] == character)  // left to right diagonal
            {
                console.log(`${character} is winner`);
            }
            else if(arr[2] == character && arr[4] == character && arr[6] == character)  // right to left diagonal
            {
                console.log(`${character} is winner`);
            }
        }

    });

});