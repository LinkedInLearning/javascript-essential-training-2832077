/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 * 
 *  Practice: Find an element
 *
- Traversing up and down the DOM tree to find one or more elements is going to be something you do all the time when working with JavaScript.

So I want this to become second nature to you. 
Now that you're familiar with the main methods we use to find elements in the DOM, the querySelector and querySelectorAll methods, 
I want you to take some time to familiarize yourself with how powerful and exacting these methods are by finding elements in an HTML document.

In the practice files, there's a standard HTML document with a bunch of different elements and classes.
 This is your playground for finding objects and working with them. 
 
 Here's what I want you to do. 
  - In the browser, identify a specific element or a set of elements you want to target.
  - Use the console or the script.js file if you wanted to get more advanced to find those target elements. 
  - Then move beyond the basics. Try targeting specific elements nested inside other elements, 
  and use advanced CSS queries to get just what you want and nothing else. 
  
  Make sure to experiment with both querySelector and querySelectorAll to see how they work differently and what type of data you get in return. 
  And if you want to try something really advanced, try populating a variable with an element higher up in the DOM tree hierarchy,
   and then use a querySelector on that variable to find one of its children. 
 */

// First h1 HTML tag text content changed
document.querySelector("h1").innerText = "My title is changed";

// page title changedd using its CSS class
document.querySelector(".site-title").innerText = "My new page title";

document
  .querySelectorAll("h1")
  .forEach(
    (title) => (title.innerText = `${title.innerText} My changed is added`)
  );

document
  .querySelectorAll("main li span")
  .forEach((item) => (item.style = "font-style: italic"));

document
  .querySelectorAll("main li:nth-child(even) ")
  .forEach((item) => (item.style = "background-color: #eee;"));
