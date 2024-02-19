// JavaScript code​​​​​​‌​‌​‌​​‌​‌​‌‌‌​​‌‌‌​‌​‌​‌ below
// Change these values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu(document) {
  // Your code goes here
  const mainNav = document.createElement("nav");
  mainNav.classList.add("main-navigation");
  const navList = document.createElement("ul");
  navList.innerHTML = navContent;
  mainNav.append(navList);

  document.querySelector(".siteheader").append(mainNav);
}

/**
 * ✓ Test passed: Use document.createElement() method.
✓ Test passed: Create mainNav.
✓ Test passed: Create <nav> element.
✓ Test passed: .main-navigation class appended to <nav> element.
✓ Test passed: Create <ul> element.
✓ Test passed: Content in <ul> matches original.
✓ Test passed: Output matches test case.

Tests passed: 7 of 7
 */
