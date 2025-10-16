/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addBackPack = function (backPack) {
  const article = document.createElement("article");
  article.innerHTML = `
    <h1>${backPack.name}</h1>
    <ul>
      <li>Volume: ${backPack.volume}</li>
      <li>Color: ${backPack.color}</li>
      <li>Number of pockets: ${backPack.pocketNum}</li>
    </ul>
  `;
  return article;
};

const main = document.querySelector("main");
main.appendChild(addBackPack(greenPack));
