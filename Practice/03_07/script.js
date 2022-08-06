/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

 const updateCar = (update) => {
    let main = document.querySelector("main"); // main is an element
    main.innerHTML = markup(car);
    console.info(update);
  };

 const car = {
    Company: "Volkswagen",
    Model: "Polo",
    Color: "Red",
    Transmission: "Manual",
    Dimension: {
      length: 500,
      width: 200,
    },
    DriveMode: "2WD",
    Fuel: "Petrol",
    updateColor: function (newColor) {
      this.Color = newColor;
      updateCar(newColor);
    },
  };

  const markup = (car) => {
    return `
    <div>
      <h3>${car.Company} ${car.Model}</h3>
      <ul>
        <li>Color: ${car.Color}</li>
        <li>Transmission: ${car.Transmission}</li>
        <li>Drive Mode: ${car.DriveMode}</li>
        <li>Dimension: Length: ${car.Dimension.length}, Width: ${ car.Dimension.width} </li>
        <li>Fuel: ${car.Fuel}</li>
      </ul>
    </div>
  `;
  };
  
  const main = document.createElement("main");
  main.innerHTML = markup(car);
  document.body.appendChild(main);