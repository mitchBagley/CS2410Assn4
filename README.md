# CS2410Assn4
Making a website so people can make their own recipes.


Project Requirements (in my own words): 
-Project must allow user to
    1. Add an ingredient to the recipe
    2. Remove an ingredient from a recipe
    3. Add an instruction to the recipe
    4. Remove an instruction to the recipe
    5. Move the recipe to a recipe card (using the writeRecipeToFile function)
    6. Allows user to do everything easily (in accessible way)
    7. Reset all of the fields to begin a new recipe

-What is accesibility? From Joseph Ditton
* Good color selection
* Keyboard interactivity
* Screenreader support - including live areas where appropriate.
* Good usage of the aria tags

NOTE: If you are on a Windows then you can use the built in Narrator app. You can activate narrator in your settings and if enabled the shortcut is "windows key + ctrl + enter".

Instructions: 
1. Already done

2. Build your application. You should keep accessibility in the front of your mind at all times!

3. Test your application by writing recipes and downloading them. The writeRecipeToFile just produces an HTML document that displays the recipe that you saved.

4. Submit the zip of your project

Design Phase
* Recipe.js
    1. Add all consts, all user inputs for the Ingredients list
    2. Will need methods for
        A. Adding ingredients to an array (addIngr)
        B. Removing ingredients from the same array (remIngr)
    3. Add event listeners for these buttons
        A. Add ingredients
        B. Remove ingredients
    4. Add all consts, all user inputs for the instructions list
    5. Will need methods for
        A. Addings instructions to an array (addInst)
        B. Removing instructions from the same array (remInst)
    3. Add event listeners for these buttons
        A. Add instructions
        B. Remove instructions



Testing Phase
* At first I had two seperate boxes for the ingredients and instructions. But having one box made everything easier.
* Spent the most amount of time on removing the items, but it turned out to be the easiest part.

Project Thoughts
* If I spend more time on this, this could be a lot more polished and improved.