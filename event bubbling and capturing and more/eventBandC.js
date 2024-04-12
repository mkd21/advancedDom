                            // BUBBLING KA EXAMPLE --->  child to parent hota hai

let outerDiv = document.querySelector(".outer");
let middleDiv = document.querySelector(".middle");
let innerDiv = document.querySelector(".inner");

// outerDiv.addEventListener("click" , (e) => {
//     console.table(

//         // it accepts object or array 

//         // {
//         //     Description : "Click event",
//         //     ActualDiv : e.target,
//         //     CurrentDiv : e.currentTarget
//         // }

//         [
//             {
//                     Description : "Click event",
//                     ActualDiv : e.target,
//                     CurrentDiv : e.currentTarget
//             }
//         ]

//     );
// });


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

                        // CAPTURING      --> parent to child propagation hota hai 


                            // just add one more arguemnt in addEventListener function ie an object or just a boolean true 

                            // notes 

                            // har event listener pr lgana hoga wo extra arguemnt nhi to jisme lga rhega usme hi bs capturing hoga baaki me bubbling pattern ho jyega 


outerDiv.addEventListener("click" , (e) => {
    console.table(
        [
            {
                    Description : "Outer DIV",
                    ActualDiv : e.target,
                    CurrentDiv : e.currentTarget
            }
        ]
    );
} , true);

middleDiv.addEventListener("click" , (e) => {
    console.table(
        [
            {
                    Description : "middle DIV",
                    ActualDiv : e.target,
                    CurrentDiv : e.currentTarget
            }
        ]
    );
} , {capture : true});

innerDiv.addEventListener("click" , (e) => {
    console.table(
        [
            {
                    Description : "inner DIV",
                    ActualDiv : e.target,
                    CurrentDiv : e.currentTarget
            }
        ]
    );
} , {capture : true});