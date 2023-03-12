//adding all input fields for the ingredients methods
const ingrInput = document.getElementById("ingredient");
const addIngr = document.getElementById("add-ingr-button");
const remIngr = document.getElementById("rem-ingr-button");
const resetIngrs = document.getElementById("reset-ingrs");
const ingrItem_listOfIngrs = document.getElementById("list-of-ingrs");

//declaring the ingredient array
const ingrArray = [];

//Adding user put ingredients to the ingredients list box
addIngr.addEventListener("click", () => 
{
    let input = ingrInput.value;
    ingrArray.push(input);
    console.log(ingrArray);
    const ingrItem = document.createElement("li");
    ingrItem_listOfIngrs.appendChild(ingrItem);
    ingrItem.innerText = input;
});

//allowing the enter key to work on the ingredient text bar
function handleKeyDown(event) 
{
    if (event.keyCode === 13) 
    {
        let input = ingrInput.value;
        ingrArray.push(input);
        console.log(ingrArray);
        const ingrItem = document.createElement("li");
        ingrItem_listOfIngrs.appendChild(ingrItem);
        ingrItem.innerText = input;
    }
}
  
//Removing user put ingredients to the ingredients list box
remIngr.addEventListener("click", () => 
{
    
});

//Removing user put ingredients to the ingredients list box
resetIngrs.addEventListener("click", () => 
{
    let resIngrs = document.getElementsByClassName("ingrs");
    for (i = 0; i < resIngrs.length; i++)
    {
        resIngrs[i].remove();
    }
});





//adding all input fields for the instructions methods
const instInput = document.getElementById("instructions");
const addInst = document.getElementById("add-inst-button");
const remInst = document.getElementById("rem-inst-button");
const resetInsts = document.getElementById("reset-insts");
const instItem_listOfInsts = document.getElementById("list-of-insts");

//declaring the instructions array
const instArray = [];

//Adding user put ingredients to the ingredients list box
addInst.addEventListener("click", () => 
{
    let userInput = instInput.value;
    instArray.push(userInput);
    const instItem = document.createElement("li");
    instItem_listOfInsts.appendChild(instItem);
    instItem.innerText = userInput;


});

 //allowing the enter key to work on the instructions text bar
    // function handleKeyDown(event) 
    // {
    //     if (event.keyCode === 13) 
    //     {
    //     let userInput = instInput.value;
    //     instArray.push(userInput);
    //     const instItem = document.createElement("li");
    //     instItem_listOfInsts.appendChild(instItem);
    //     instItem.innerText = userInput;
    //     }
    // }


//Removing user put ingredients to the ingredients list box
remInst.addEventListener("click", () => 
{
    
});

//Removing user put ingredients to the ingredients list box
resetInsts.addEventListener("click", () => 
{
    let resInsts = document.getElementsByClassName("insts");
    for (i = 0; i < resInsts.length; i++)
    {
        resInsts[i].remove();
    }
});

//making the recipe download button 
const makeRecipe = document.getElementById("recipe-download");

//Adding the click part for the button to download the recipe!
makeRecipe.addEventListener("click", () => 
{
    writeRecipeToFile(); //doesn't work as of now
});