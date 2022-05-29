//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

setInterval(() => {
	segundos++;
	if (segundos === 59) {
		minutos++;
		segundos = 0;
	}
	if (minutos === 59) {
		horas++;
		minutos = 0;
	}
	if (horas === 24) {
		dias++;
		horas = 0;
	}

	//render your react application
	ReactDOM.render(
		<Home
			segundos={segundos}
			minutos={minutos}
			horas={horas}
			dias={dias}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
