import { GlobalContext } from "../../../../../context/GlobalContext";
import { HeaderCalc } from "../header/HeaderCalc";
import { FormCalculatorSingle } from "./formCalculatorSingle/FormCalculatorSingle";
import { useContext } from "react";

export const PorcentageSingle = () => {
	const { bbddCalculators } = useContext(GlobalContext);
	const { calculatorSingle } = bbddCalculators[1];
	return (
		<div className="PorcentageSingle">
			{calculatorSingle.map((e, index) => (
				<HeaderCalc title={e.title} description={e.description} key={index} />
			))}

			<FormCalculatorSingle />
		</div>
	);
};
