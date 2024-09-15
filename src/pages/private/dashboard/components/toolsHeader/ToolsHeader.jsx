import { Tools } from '..';
import { CardTool } from '..';
import './ToolsHeader.scss';
import { Outlet } from 'react-router-dom';
import { Calculator, Lists } from '../../../../../components/svg/index';
import { useToolsHeader } from '../hooks/useToolsHeader';

export const ToolsHeader = () => {
	const { showCalculators, showProduct, handleShowCalculator } =
		useToolsHeader();

	return (
		<div className='ToolsHeader'>
			<div className='ToolsHeader-calculator'>
				<Tools nameTool={'Herramientas'} event={handleShowCalculator} />
				{showCalculators && (
					<div className='ToolsHeader-cards'>
						<CardTool
							name={'Calculadoras Summit'}
							svg={<Calculator className={'ToolsHeader-svg'} />}
							redirect={'calculators'}
						/>
						<CardTool
							name={'Lista de productos'}
							redirect={'products'}
							svg={<Lists className={'ToolsHeader-svg'} />}
						/>
					</div>
				)}
			</div>

			<div className='ToolsHeader-products'>
				<Tools nameTool={'Mesa de trabajo'} />
				{showProduct && (
					<div className='ToolsHeader-outlet'>
						<Outlet />
					</div>
				)}
			</div>
		</div>
	);
};
