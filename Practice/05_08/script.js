/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/**
 Practice: Modify classes and attributes, and styles

- Being able to quickly access, modify, add and remove classes, attributes and inline styles from any element in the DOM, 
is a bit like having a bag of tools on hand to solve pretty much any problem. 
Need to indicate a state change of an element? Add or remove a class. 
Need to pass data from one element to the other? Add a data attribute. 
Need to change the appearance of a specific element for some reason? 

Add an inline style. In the previous practice assignment, 
you familiarized yourself with accessing DOM elements using the query selector and query selector all methods.
 Now I want you to take this one step further by actively modifying the elements you've targeted by adding or removing classes, attributes, and inline styles. 
 
 Here's some examples of what you can do.

Find an element and add two different classes then remove only one of those new classes. 
Add a new attribute to an element. 
This can be a standard attribute like source or alt if that's appropriate for that element or it can be a data attribute passing literally any data you want.
By the way data attributes follow the naming convention data dash and then the name of the attribute. 
Request the value of the attribute you added. Change the value of that attribute you added.
 Add some inline CSS to an element by specifying the style property and setting its value. 
 And finally query the style of property of an element in the console to get a list of all the style properties available to you. 
 */

document.querySelector("img").hasAttribute("src");
document.querySelector("img").setAttribute("alt", "A drawing of a backpack");
document
  .querySelector("img")
  .setAttribute("title", "A drawing of a backpack to be removed");
document.querySelector("img").removeAttribute("title");

document.querySelector(".site-title").style.color = "blue";

// My practice
// Find an element
const element = document.querySelector("article h1");

// and add two different classes
element.className = "siteheader sitefooter";
setTimeout(() => {
  console.log("Delayed for 3 seconds.");
  //  then remove only one of those new classes.
  element.classList.remove("sitefooter");
}, 3000);

/**
 * Add a new attribute to an element. 
This can be a standard attribute like source or alt if that's appropriate for that element or it can be a data attribute passing literally any data you want.
By the way data attributes follow the naming convention data dash and then the name of the attribute.
 */
element.setAttribute("data-name", element.textContent);
document.querySelector("article img").setAttribute("alt", element.textContent);
document
  .querySelector("article img")
  .setAttribute("title", element.textContent);

// Request the value of the attribute you added. Change the value of that attribute you added.
console.log(document.querySelector("article img").getAttribute("title"));
document
  .querySelector("article img")
  .setAttribute("title", `Title ${element.textContent} updated`);
console.log(document.querySelector("article img").getAttribute("title"));

// Add some inline CSS to an element by specifying the style property and setting its value.

element.style.color = "red";
element.style.fontStyle = "italic";
element.style.fontFamily = "serif";

//  And finally query the style of property of an element in the console to get a list of all the style properties available to you.
console.log(element.style);
console.table(element.style);
