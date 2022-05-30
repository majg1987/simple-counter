import React from "react";
import Contador from "./Contador";

//create your first component
const Home = ({
	segundos,
	minutos,
	horas,
	dias,
	resetearContador,
	paraContador,
}) => {
	return (
		<>
			<Contador
				segundos={segundos}
				minutos={minutos}
				horas={horas}
				dias={dias}
				resetearContador={resetearContador}
				paraContador={paraContador}
			/>
		</>
	);
};

export default Home;
