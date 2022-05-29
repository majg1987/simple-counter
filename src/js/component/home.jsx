import React from "react";
import Contador from "./Contador";

//create your first component
const Home = ({ segundos, minutos, horas, dias }) => {
	return (
		<>
			<Contador
				segundos={segundos}
				minutos={minutos}
				horas={horas}
				dias={dias}
			/>
		</>
	);
};

export default Home;
