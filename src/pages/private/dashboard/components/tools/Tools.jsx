import "./Tools.scss";
import { ArrowRight } from "../../../../../components/svg/ArrowRight";

export const Tools = ({ nameTool }) => {
	return (
		<div className="Tools">
			<ArrowRight classname={"Tools-arrow"} />
			<p className="Tools-p">{nameTool}</p>
		</div>
	);
};
