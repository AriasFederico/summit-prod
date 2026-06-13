import { CardTool } from "..";
import { useGetList } from "../../../products/hooks/useGetList";
import styles from './ToolsHeader.module.scss'

export const ToolsHeader = () => {
	const { getList } = useGetList();
	return (
		<div className={styles.toolsHeader}>
			<CardTool
				title={"Calculadoras de Margen"}
				subtitle={'Calculá costos y márgenes de ganancia por unidad o lote.'}
				redirect={"calculators"}
				icon={'percent'}
			/>
			<CardTool
				title={"Mis Productos"}
				subtitle={'Controlá el stock, precios y márgenes de toda tu mercadería'}
				redirect={"products"}
				icon={'box'}
				event={() => getList()}
			/>
			{/* <CardTool
						name={'NOVEDADES'}
						redirect={'novedades'}
						svg={<Lists className={'ToolsHeader-svg'} />}
					/> */}
		</div>
	);
};
