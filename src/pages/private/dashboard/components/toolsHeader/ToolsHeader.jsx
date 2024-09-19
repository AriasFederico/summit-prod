import { Tools } from '..';
import { CardTool } from '..';
import './ToolsHeader.scss';
import { Outlet } from 'react-router-dom';
import { Calculator, Lists } from '../../../../../components/svg/index';

export const ToolsHeader = () => {
	return (
		<div className='ToolsHeader'>
			<div className='ToolsHeader-calculator'>
				<Tools nameTool={'Herramientas'} />
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
			</div>

			<div className='ToolsHeader-products'>
				<Tools nameTool={'Mesa de trabajo'} />
				<div className='ToolsHeader-outlet'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
