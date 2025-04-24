<script lang="ts" setup>
const { data: tasks, error, status } = await useFetch("/api/tasks", {
	lazy: true, // Argomento aggiuntivo per fix latenza richiesta api
});
</script>

<template>
	<div>
		<article
			v-if="status === 'pending'"
			aria-busy="true"
		/>
		<div v-else>
			<article
				v-for="task in tasks"
				:key="task.id"
			>
				<h3>{{ task.title }}</h3>
				<p>Completato: {{ task.done ? 'SI' : 'NO' }}</p>
			</article>
		</div>
	</div>
</template>
