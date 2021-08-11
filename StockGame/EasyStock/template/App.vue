<template>
	<div>
		<div class="container">
			<div class="columns">
				<div class="column is-3">
					<section class="section">
						<aside class="menu">
							<ul class="menu-list">
								<li>
									<router-link :to="{ name: 'Portfolio' }"
										>Portfolio</router-link
									>
								</li>
								<li>
									<router-link :to="{ name: 'Stocks' }"
										>Stocks</router-link
									>
								</li>
							</ul>
						</aside>
					</section>
				</div>
				<div class="column is-9">
					<section class="section">
						<transition name="component-fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
	name: "App",
})
export default class App extends Vue {}
</script>

<style scoped lang="scss"></style>
