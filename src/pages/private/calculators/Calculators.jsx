import { PorcentageNormal } from "./components/porcentageNormal/PorcentageNormal";
import { PorcentageSingle } from "./components/porcentageSingle/PorcentageSingle";
import "./Calculators.scss";
export const Calculators = () => {
	return (
		<div className="Calculators">
			<PorcentageNormal />
			<PorcentageSingle />
		</div>
	);
};
