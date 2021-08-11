import Home from "@/template/views/Home.vue";
import VueRouter from "vue-router";

// Pages
import Portfolio from "@/template/views/Portfolio.vue";
import Stocks from "@/template/views/Stocks.vue";

const routePrefix = "easystock";

const routes = [
	{
		name: "EasyStock",
		path: `/${routePrefix}`,
		component: Home,
	},
	{
		name: "Portfolio",
		path: `/${routePrefix}/portfolio`,
		component: Portfolio,
	},
	{
		name: "Stocks",
		path: `/${routePrefix}/stocks`,
		component: Stocks,
	},
];

export const router = new VueRouter({
	mode: "history",
	routes,
	linkActiveClass: "is-active",
});
