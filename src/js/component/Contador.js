import React from "react";

const Contador = ({
	segundos,
	minutos,
	horas,
	dias,
	resetearContador,
	paraContador,
}) => {
	return (
		<>
			<div className="container text-white">
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
			<div className="text-center mt-3">
				<div
					className="btn-group"
					role="group"
					aria-label="Basic mixed styles example">
					<button
						type="button"
						onClick={paraContador}
						className="btn btn-danger btn-lg">
						Parar
					</button>
					<button
						type="button"
						onClick={resetearContador}
						className="btn btn-warning btn-lg text-white">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default Contador;
