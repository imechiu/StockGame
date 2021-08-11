<template>
	<h1>{{ name }}</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "Stocks",
})
export default class Stocks extends Vue {
	name: string = "Stocks";
}
</script>

<style lang="scss" scoped></style>
