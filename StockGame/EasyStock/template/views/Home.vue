<template>
	<div>
		<div class="container">
			<h1 class="title">
				{{ pageTitle }}
			</h1>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "TemplateInfo",
})
export default class TemplateInfo extends Vue {
	pageTitle: string = "How to play";
}
</script>

<style scoped></style>
