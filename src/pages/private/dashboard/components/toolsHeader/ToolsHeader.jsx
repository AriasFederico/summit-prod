import { Tools } from "..";
import { CardTool } from "..";
import "./ToolsHeader.scss";
import { Outlet } from "react-router-dom";
import { Calculator, Lists } from "../../../../../components/svg/index";

export const ToolsHeader = () => {
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
