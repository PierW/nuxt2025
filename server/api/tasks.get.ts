export default defineEventHandler(async () => {
	// Simulo latenza di 3 secondi
	await new Promise(resolve => setTimeout(resolve, 3000));

	return [
		{
			id: 1,
			title: "Learn Nuxt",
			done: true,
		},
		{
			id: 2,
			title: "Learn Vue",
			done: false,
		},
	];
});
