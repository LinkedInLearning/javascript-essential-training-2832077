/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Object declaration in the global scope
var articleObj = {
  title: "Jurassic Park",
  mainReveiew: "Dinos were great!",
  userReviews: [
    {
      title: "Too scary!",
      content: "Way too scary for me.",
      postedOn: new Date("2015-05-16 19:00 GMT"),
      author: "Lisa",
    },
    {
      title: "Love the dinos!",
      content: "I agree, dinos are my favorite.",
      postedOn: new Date("2015-05-17 19:00"),
      author: "Tom",
    },
    {
      title: "Thanks the dinos!",
      content: "If they weren't extinct we won't exist.",
      postedOn: new Date("2015-05-18 19:00 GMT"),
      author: "Anonymous",
    },
  ],
};

/**
 * // Function expression
 *
 * @param {*} date
 * @returns
 */
const getDayAndMonth = function (date) {
  const dayAndMonth = `${date.toLocaleString("default", {
    month: "long",
  })}, ${date.getDate()}`; // getDay() returns the day of the week instead of the day of the month
  return dayAndMonth;
};

/**
 * Function declaration in the global scope
 *
 * @param {*} article
 * @returns HTMLElement elementArticle <article>
 */
function createArticle(article) {
  // var declaration in de local (function) scope
  let elementArticle = document.createElement("article");
  let userReviews = "";
  for (const review of article?.userReviews) {
    userReviews += `<article class="user_review">
        <h4>${review.title}</h4>
        <p>${review.content}</p>
        <footer>
          <p>
            Posted on
            <time datetime="${review.postedOn}"> ${getDayAndMonth(
      review.postedOn
    )} </time>
            by ${review.author}.
          </p>
        </footer>
       </article>`;
  }

  elementArticle.innerHTML = `<h2>${article?.title}</h2>
    <section class="main_review">
      <h3>Review</h3>
      <p>${article?.mainReveiew}</p>
    </section>
    <section class="user_reviews">
      <h3>User reviews</h3>
      ${userReviews}
    </section>
    <footer class="article-footer">
      <p>
        Posted on
        <time datetime="2015-05-15 19:00">May 15</time>
        by Staff.
      </p>
    </footer>
  `;
  console.log(elementArticle);
  return elementArticle;
}

// Function expression, more advanced and used in frameworks
const helperArticle = function (articleParam) {
  document.body.appendChild(articleParam);
};

// Inmediatly invoked function Expression
(function () {
  const created = createArticle(articleObj);
  helperArticle(created);
})();

// Or execute them in one line
//helperArticle(createArticle(articleObj));
