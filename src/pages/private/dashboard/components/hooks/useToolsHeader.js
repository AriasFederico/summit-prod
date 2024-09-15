import { useState } from 'react';

export const useToolsHeader = () => {
	const [showCalculators, setShowCalculators] = useState(true);
	const [showProduct, setShowProduct] = useState(true);

	const handleShowCalculator = () => {
		setShowCalculators(!showCalculators);
	};

	const handleShowProducts = () => {
		setShowProduct(!showProduct);
	};

	return {
		showCalculators,
		showProduct,
		handleShowCalculator,
		handleShowProducts,
	};
};
