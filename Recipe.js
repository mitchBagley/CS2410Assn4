export function writeRecipeToFile(recipe);

//adding all input fields for all methods methods
const itemInput = document.getElementById("item");
const addItem = document.getElementById("add-item-button");
const resItems = document.getElementById("reset-items");
const item_listOfItems = document.getElementById("list-of-items");

//declaring the ingredient array
const itemArray = [];
const resetItems = document.getElementsByClassName("items");

//Adding user put ingredients to the list box
addItem.addEventListener("click", () => 
{
    let input = itemInput.value;
    itemArray.push(input);
    const item = document.createElement("li");
    item_listOfItems.appendChild(item);
    item.innerText = input;
});

//allowing the enter key to work on the text bar
function handleKeyDown(event) 
{
    if (event.keyCode === 13) 
    {
        let input = itemInput.value;
        itemArray.push(input);
        const item = document.createElement("li");
        item_listOfItems.appendChild(item);
        item.innerText = input;
    }
}

//Making list items removable

item_listOfItems.addEventListener("click", (theClick) =>
{
    const itemClicked = theClick.target;
    itemClicked.remove();
});

  

//Resetting user put input to list box

resItems.addEventListener("click", () => 
{
     for (i = 0; i < resetItems.length; i++)
     {
         resetItems[i].remove();
     }
});

//making the recipe download button 
const makeRecipe = document.getElementById("recipe-download");




