import React from "react";

const Contador = ({ segundos, minutos, horas, dias }) => {
	return (
		<div className="container bg-black text-white">
			<div className="row d-flex justify-content-center display-4 fw-bold">
				<div className="col-2 ventana bg-dark m-3 d-flex justify-content-center align-items-center">
					<i class="far fa-clock"></i>
				</div>
				<div className="col-2 ventana cuatro bg-dark m-3 d-flex justify-content-center align-items-center">
					<p>{dias} days</p>
				</div>
				<div className="col-2 ventana tres bg-dark m-3 d-flex justify-content-center align-items-center">
					<p>{horas} h</p>
				</div>
				<div className="col-2 ventana dos bg-dark m-3 d-flex justify-content-center align-items-center">
					<p> {minutos} min</p>
				</div>
				<div className="col-2 ventana uno bg-dark m-3 d-flex justify-content-center align-items-center">
					<p>{segundos} s</p>
				</div>
			</div>
		</div>
	);
};

export default Contador;
