import { Tools } from "..";
import { CardTool } from "..";
import "./ToolsHeader.scss";
import { Calculator, Lists } from "../../../../../components/svg/index";
import { useGetList } from "../../../products/hooks/useGetList";

export const ToolsHeader = () => {
	const { getList } = useGetList();
	return (
		<div className="ToolsHeader">
			<div className="ToolsHeader-calculator">
				<Tools nameTool={"HERRAMIENTAS"} />
				<div className="ToolsHeader-cards">
					<CardTool
						name={"CALCULADORAS SUMMIT"}
						svg={<Calculator className={"ToolsHeader-svg"} />}
						redirect={"calculators"}
					/>
					<CardTool
						name={"PRODUCTOS"}
						redirect={"products"}
						svg={<Lists className={"ToolsHeader-svg"} />}
						event={() => getList()}
					/>
					{/* <CardTool
						name={'NOVEDADES'}
						redirect={'novedades'}
						svg={<Lists className={'ToolsHeader-svg'} />}
					/> */}
				</div>
			</div>
		</div>
	);
};
