/**
 * 
Question 1 of 11

What method(s) would you use to check if an element has a specific ID and if so replace it with a different ID?

    The element.setAttribute() method.
    https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

    The element.attribute property. 
    https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes

    The element.hasAttribute() method.
    https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute


    the element.hasAttribute() and element.setAttribute() methods.
    Correct 
    https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

    Note execute script with defer attribute

    The defer attribute tells the browser not to wait for the script.
     Instead, the browser will continue to process the HTML, build DOM. 
     The script loads “in the background”, and then runs when the DOM is fully built.

 */

const page = document.getElementById("page");
if (page && page.hasAttribute("id")) {
  // do something
  page.setAttribute("id", "page-id_updated");
}

// in a console
const div1 = document.getElementById("div1");
if (div1 && div1.hasAttribute("id")) {
  div1.setAttribute("id", "div1-id_updated");
}

/**
 * 
Question 2 of 11

What is the difference in the return from the element.className and element.classList properties?

    element.className returns a string containing the first class appended to the element. element.classList returns a string containing all classes appended to the element.
    element.className returns the HTML content of an element with the specified class. element.classList returns a list of all classes used in the document.
    element.className returns an array with each class appended to the element as an array item. element.classList returns a DOMTokenList with each class appended to the element.

    element.className returns a string containing all classes appended to the element. element.classList returns a DOMTokenList with each class appended to the element.
    Correct 
 */

console.log(`element.className ${page.className}`);
console.log(page.className);
// page custom-class other-class

console.log("classList ");
console.log(page.classList);
// DOMTokenList(3) ['page', 'custom-class', 'other-class', value: 'page custom-class other-class'

/** 
 * 
Question 3 of 11

What does the HTML markup of this image element look like after the following script has executed?
 

const newImage = document.createElement("img");
newImage.classList.add("feat-img");
newImage.setAttribute("src", "logo.svg");
newImage.setAttribute("alt", "The company logo");
newImage.style.cssText = "display: block";

    <img style="display: block;" src="logo.svg" alt="The company logo">
    <img class="feat-img" src="logo.svg" title="The company logo" style="display: block;">
    <img class="feat-img" src="logo.svg" alt="The company logo" style="display: block;">
    Correct

    <img class="feat-img display: block;" src="logo.svg" alt="The company logo">


 */

const newImage = document.createElement("img");
newImage.classList.add("feat-img");
newImage.setAttribute("src", "logo.svg");
newImage.setAttribute("alt", "The company logo");
newImage.setAttribute("width", "200");
newImage.style.cssText = "display: block";

/**
 * 
 * 
 * Question 4 of 11

What is the value of const target after this code has executed? 
 

const target = document.querySelectorAll("a");

    A single element object of the first element matching the query.
    An array containing each element object matching the query.
    A node list containing each element object matching the query if there is more than one match, a single element object if there is only one match.

    A node list containing each element object matching the query.
    Correct 
 */

const target = document.querySelectorAll("div");
console.log("querySelectorAll");
console.log(target);

/*
NodeList(3) [div#page-id_updated.page.custom-class.other-class, div#content, div#div1-id_updated]
0
: 
div#page-id_updated.page.custom-class.other-class
1
: 
div#content
2
: 
div#div1-id_updated
length
: 
3
[[Prototype]]
: 
NodeList
*/

/**
 * 
 * 
Question 5 of 11

What is the value of const target after this code has executed (assuming there are elements in the DOM with the class "note")? 
 

const target = document.getElementsByClassName(".note");

    An array-like HTMLCollection object containing each element with the class "note".
    The getElementsByClassName() method receives a string of classnames to be found as its parameter Adding the . in front of the classname invalidates the query and no match is produced.
    
    An empty array-like HTMLCollection object.
    Correct

    A node list containing each element with the class "note".
    The getElementsByClassName() method receives a string of classnames to be found as its parameter Adding the . in front of the classname invalidates the query and no match is produced.

    A value of "undefined"
    The getElementsByClassName() method receives a string of classnames to be found as its parameter Adding the . in front of the classname invalidates the query and no match is produced.


 */

const element = document.getElementsByClassName(".note");
console.log("Question 5 of 11");
console.log(element);

/**
HTMLCollection []length: 0[[Prototype]]: HTMLCollection
 */

/**
 * 
Question 6 of 11

The querySelector() and querySelectorAll() methods use what kind of selectors as their parameter?

    Any HTML element or classname.
    An HTML selector string.

    A CSS selector string.
    Correct

    A custom function.


  
  
 **   https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   querySelector(selectors)
   
    Parameters
selectors
    A string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.


 **   https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    querySelectorAll(selectors)

    Parameters
selectors
    A string containing one or more selectors to match against. This string must be a valid CSS selector string; if it's not, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more information about using selectors to identify elements. Multiple selectors may be specified by separating them using commas.


 */

/**
     * 
Question 7 of 11

What happens if you run this code:
 

const target = document.querySelector(".first-paragraph");
target.style.font-family = "sans-serif";

    "Uncaught SyntaxError: Invalid left-hand side in assignment"
    Correct

    JavaScript does not allow for hyphens in property names. When targeting CSS properties, use camelCase, so the "font-family" property becomes "fontFamily".
    The inline style for the target element is set to "font-family: sans-serif;"
   
    Nothing. The syntax is wrong so the browser ignores this line of code.
    JavaScript does not allow for hyphens in property names. When targeting CSS properties, use camelCase, so the "font-family" property becomes "fontFamily".

    "Uncaught SyntaxError: Invalid CSS selector"
    JavaScript does not allow for hyphens in property names. When targeting CSS properties, use camelCase, so the "font-family" property becomes "fontFamily".

*/
const seven = document.querySelector(".first-paragraph");
// seven.style.font - family = "sans-serif";
/**
 * Uncaught SyntaxError: Invalid left-hand side in assignment (at quiz-practice.js:230:1)
 */

/**
    Question 8 of 11

What does the element.classList.toggle() method do?

    Adds the a class named "toggle" to the element.

    Adds the specified class if it is not appended to the element, removes the specified class if it is appended to the element.
    Correct

    Adds the specified class if it is not appended to the element, leaves the specified class in place if it is appended to the element.
    Toggles the display property from "none" to "block" to hide or show the element.
*/

console.log(page.className);
console.log("before toggle");
page.classList.toggle("togle-example"); // class added: Adds the specified class if it is not appended to the element,
page.classList.toggle("custom-class"); // removes the specified class if it is appended to the element.
console.log("after toggle");
console.log(page.className);

/**
Question 9 of 11

Where in the HTML document does the new element appear when you use the document.createElement() method?

    Nowhere: The element is created, but has not been added to the DOM.
    Correct

    At the bottom of the HTML document.
    Inside the specified element container.
    At the top of the HTML document.

Question 10 of 11

What is the "DOM"?

    DOM is short for "Document Object Model", the document object the browser creates when it renders an HTML document.
    Correct

    DOM is the JavaScript environment the browser creates for each HTML document.
    DOM is the name of a 2012 album by German singer Joachim Witt
    DOM is short for "Document Object Master", the original document the browser renders.

Question 11 of 11

How do you add an element created using createElement() to the DOM?

    Using the insertAdjacentElement() method.
    All these options and more.
    Correct

    Using the prepend() method.
    Using the append() or appendChild() methods.

     */
div1.insertAdjacentElement("beforebegin", newImage);
let p = document.createElement("p");
p.innerText = "paragraph inserted after";
div1.append(p);

let span = document.createElement("span");
span.innerText = "spam inserted before ";
div1.prepend(span);

console.log(div1.childNodes);

console.log("finish");
