import "./Dolar.scss";
export const Dolar = ({ data }) => {
	if (!data) return null;

	return (
		<div className="Dolar">
			<span className="Dolar-span">USD {data.nombre}</span>
			<ul className="Dolar-ul">
				<li className="Dolar-li">
					VENTA: $ <span className="Dolar-value">{data.venta.toFixed(2)}</span>
				</li>
				<li className="Dolar-li">
					COMPRA: ${" "}
					<span className="Dolar-value">{data.compra.toFixed(2)}</span>
				</li>
			</ul>
		</div>
	);
};
