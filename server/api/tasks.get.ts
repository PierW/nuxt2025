export default defineEventHandler(async (event) => {
	// Simulo latenza di 3 secondi
	await new Promise(resolve => setTimeout(resolve, 3000));

	// Simulo un errore custom
	return sendError(event, createError({
		statusCode: 500,
		statusMessage: "Internal Server Error",
	}));

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
