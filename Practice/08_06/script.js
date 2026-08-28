/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Object with data
const articleData = {
  title: "JavaScript Practice",
  content: "This is a practice exercise to pass values between functions.",
  author: "Serhat Ece",
  date: "2024-07-27",
};

// Main function to create the article element
function createArticle(data) {
  // Create article element
  const article = document.createElement("article");

  // Use helper functions to create and append elements
  const title = createElement("h1", data.title);
  const content = createElement("p", data.content);
  const author = createElement("p", `Author: ${data.author}`);
  const date = createElement("p", `Date: ${data.date}`);

  // Append elements to the article
  article.appendChild(title);
  article.appendChild(content);
  article.appendChild(author);
  article.appendChild(date);

  // Append the article to the body or any other container
  document.body.appendChild(article);
}

// Helper function to create an element with text content
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

// Call the main function with article data
createArticle(articleData);
