export const getDay = async () => {
	try {
		fetch('https://api.argentinadatos.com/v1/feriados/2024')
			.then((response) => response.json())
			.then((data) => console.log(data));
	} catch (error) {
		console.log(error);
	}
};
