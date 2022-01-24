const updateInvestments = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(investments);
  console.info(update);
};

const investments = {
  name: "Apple",
  risklevel: "Moderate",
  price: 32,
  ticker: 'AAPL',
  type:  'ETF';
};

const client = {
  name:  "",
  address:  "",
  email: "",
  phone: "";
};

const advisor = {
  name: "Elisabeth Noble",
  phone:  "904-352-6609",
  email:  "elisabeth@healthylivinginvestments.com";
};  

const ETFholdings = {
  stock1:  "",
  stock2:  "",
  bond1:  "",
  bond2:  "";
};

const markup = (investments) => {
  return `
  <div>
	<h3>${investments.name}</h3>
	<ul>
	  <li>Ticker: ${investments.ticker}</li>
	  <li>Risk: ${investments.risk}</li>
	  <li>Price: ${investments.price}</li>
	  <li>Type: ${investments.type}</li>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);
