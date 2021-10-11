/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const makeComputer = () => {

    let computer = {
        name: "Lenovo",
        screenSize: "13 Inches",
        ramMemory: "8GB",
        hardDrive: "2TB",
        processor: "i5 3.5ghz"
    }

    return computer;

}

const main = (object) => {

    let article = document.createElement("article");
    article.innerHTML = `
    
    <h1>My New Computer</h1>
    <p>${object.name}</p>
    <p>${object.screenSize}</p>
    <p>${object.ramMemory}</p>
    <p>${object.hardDrive}</p>
    <p>${object.processor}</p>
    `

    return article;
}


const root = document.querySelector("main");

root.append(main(makeComputer()));

