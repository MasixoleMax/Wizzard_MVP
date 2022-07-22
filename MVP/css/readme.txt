        ########################### [ CSS DOCCUMENTATION ] ##########################

/*********************************************************************************************
TO CREATE RESPONSIVE WEB PAGES THE W3.CSS FRAMEWORK WAS USED:-
**********************************************************************************************
--in the header of each html file the following link is found: 
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
--with html inline-styling, the w3css classes can be used without their definition in the css files.
--this framework was chosen for it's simpicity, efficiency and easy learning curve.
*/

**********************************************************************************************
TO CREATE THE REQUIRED LAYOUT, THE W3.CSS FRAMEWORK WAS USED TO DESIGN A PAGE WITH TWO UNEQUAL
COLUMNS. THIS WAS SO TO ACHIEVE CLOSE PROXIMITY TO THE GIVEN GRAPHIC DESIGN FOR THE WEB PAGE:-  
**********************************************************************************************
--first enclose everything under the body with a div element.
--inline-style the entire div to become a row.
--make the first column to take a size of 2/3 of the entire row and enclose it with a container.
--create another div under the 2/3 div and make it take the remaining 1/3 row size.
--every 2/3 div created inside the row div will be placed at the left column of the page.
--every 1/3 div created inside the row div will be placed at the right column of the page.
--the two columns will automatically stack on top of each other on screens less than 601px [RESPONSIVE].
*/

/*********************************************************************************************
FOR EASY READABILITY, THE CODE WAS REFACTORED AND NON-EFFECTIVE CODE WAS REMOVED AS CHANGES 
HAD TO BE MADE TO THE HTML. THESE HTML CHANGES MEANT THAT CSS HAD TO BE ALTERED. THIS WAS DONE 
IN THE FOLLOWING WAY:-  
**********************************************************************************************
--when all requirements were met, each css code was commented out to see if there will be any changes.
--if there were any changes, these changes were examined for a simpler and cleaner way to code the css.
--when the css code did not have any effect upon commenting out, the css code was removed.
--this resulted in the removal of unnecessary code and a more readable css code.
--short comments were then made for each styling block to demonstarte functionality.
*/

/*********************************************************************************************
FOR CODE REUSABILITY, EASY ACCESSABILITY AND NAVIGATION, THE CSS IS SEPARATED ACCORDING TO 
IT'S INDIVIDUAL HTML PAGE TO BE STYLED. THIS DOES NOT ONLY MAKE IT EASY FOR OTHER DEVELOPERS TO
NAVIGATE TO THE REQUIRED CSS STYLING FOR A SPECIFIC HTML PAGE BUT ALSO ALLOWS FOR EACH HTML TO 
HAVE ITS OWN CSS LINK AND PREVENTS MESSING UP MANY PAGES UPON DEBUGGING AND CODING ERRORS:-        
**********************************************************************************************
--corresponding css and html pages are named identically.
--each html page has a single link to its own css styling page.
--identical css code for html pages appears first from top for easy comparison.
--special styling for each html page follows after the identical css code to avoid confusion.
--this doccumentation and all css files will be found inside a css only repository.
*/