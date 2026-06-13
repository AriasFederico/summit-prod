export const getDolarData = async () => {
	try {
		const dolarResponse = await fetch('https://dolarapi.com/v1/dolares');
		const dolarData = await dolarResponse.json();
		return dolarData;
	} catch (error) {
		console.log(error);
	}
};
