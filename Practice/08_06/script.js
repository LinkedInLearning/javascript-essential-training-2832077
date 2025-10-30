/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const main = document.querySelector("main");

function toevoegenMain() {
  let tekst = document.createElement("p");
  tekst.textContent = `Dit heb ik via een function declaration gemaakt`;
  main.append(tekst);
}

const veranderKleuren = function (kleur) {
  let tekst = document.createElement("p");
  tekst.textContent = "Wat tekst gemaakt met de function expresion";
  tekst.style.color = kleur;
  return tekst;
};

const veranderAchtergrond = (kleur) => {
  let tekst = document.createElement("p");
  tekst.textContent = "Wat tekst gemaakt met de function expresion";
  tekst.style.backgroundColor = kleur;
  return tekst;
};

toevoegenMain();
main.appendChild(veranderKleuren("blue"));
main.appendChild(veranderAchtergrond("green"));
