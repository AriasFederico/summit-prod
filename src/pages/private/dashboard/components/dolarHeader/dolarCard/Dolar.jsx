import './Dolar.scss';
export const Dolar = ({ nombre, venta, compra, moneda }) => {
	return (
		<div className='Dolar'>
			<ul>
				<li>Moneda: {moneda}</li>
				<li>Tipo: {nombre}</li>
				<li>Valor de venta: $ {venta}</li>
				<li>Valor de compra: $ {compra}</li>
			</ul>
		</div>
	);
};
