<template>
	<h2>{{ name }}</h2>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "Portfolio",
})
export default class Portfolio extends Vue {
	name: string = "Portfolio";
}
</script>

<style scoped></style>
