export const getDolarData = async () => {
	try {
		const [dolarResponse, dolarBlueResponse, dolarMayorista] =
			await Promise.all([
				fetch('https://dolarapi.com/v1/dolares/oficial'),
				fetch('https://dolarapi.com/v1/dolares/blue'),
				fetch('https://dolarapi.com/v1/dolares/mayorista'),
			]);

		const dolarData = await dolarResponse.json();
		const dolarBlueData = await dolarBlueResponse.json();
		const dolarMay = await dolarMayorista.json();

		return { dolarData, dolarBlueData, dolarMay };
	} catch (error) {
		console.log(error);
	}
};
