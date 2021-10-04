/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */


//Selection 

const main = document.querySelector(".maincontent");

//Creation

const mainImgContainer = document.createElement("div");

const mainImg = document.createElement("img");

mainImg.src="https://swissgear.imgix.net/s/w/swa2706_dark_grey_alt4.jpg?w=500&auto=format,compress";

main.prepend(mainImgContainer);

mainImgContainer.prepend(mainImg);

//Styling 


mainImgContainer.style.display="grid";
mainImgContainer.style.gridTemplateColumns="100%";
mainImgContainer.style.justifyItems="center";
mainImg.style.width="10em";
mainImg.style.marginTop="-7em";
mainImgContainer.prepend();