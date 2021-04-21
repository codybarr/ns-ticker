/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		src: '/dist',
		public: '/',
	},
	plugins: [
		['@snowpack/plugin-svelte', { customElement: true }],
		'@snowpack/plugin-postcss',
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
}
