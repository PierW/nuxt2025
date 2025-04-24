<template>
	<nav class="container">
		<ul>
			<li><NuxtLink to="/">TODO APP</NuxtLink></li>
		</ul>
		<ul>
			<li><NuxtLink :to="{ name: 'create' }">Crea Task</NuxtLink></li>
		</ul>
	</nav>
</template>
