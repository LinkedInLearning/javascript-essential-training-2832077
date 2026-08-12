/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// This is an object:

const gamingPc = {
  processor: "Amd",
  grapicsCard: "Nvidia",
  ram: "32gb",
  motherBoard: "asus",
  fans: "8",
  powerSupplay: "1200w",
};

//Getting the div:
const showPcSpec = document.getElementById("gamingPcDiv");

// Displaying the object in HTML:
showPcSpec.innerHTML = `  <p><strong>Processor:</strong> ${gamingPc.processor}</p>
<p><strong>Grapicscard:</strong> ${gamingPc.grapicsCard}</p>
<p><strong>Ram:</strong> ${gamingPc.ram}</p>
<p><strong>Motherboard:</strong> ${gamingPc.motherBoard}</p>
<p><strong>Fans:</strong> ${gamingPc.fans}</p>
<p><strong>Powersupplay:</strong> ${gamingPc.powerSupplay}</p>
`;
