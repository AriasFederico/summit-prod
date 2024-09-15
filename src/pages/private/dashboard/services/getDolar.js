export const getDolarData = async () => {
	try {
		const [dolarResponse, dolarBlueResponse] = await Promise.all([
			fetch('https://dolarapi.com/v1/dolares/oficial'),
			fetch('https://dolarapi.com/v1/dolares/blue'),
		]);

		const dolarData = await dolarResponse.json();
		const dolarBlueData = await dolarBlueResponse.json();
		return { dolarData, dolarBlueData };
	} catch (error) {
		console.log(error);
	}
};
