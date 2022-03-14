import App from './App.svelte';

const app = new App({
	target: document.querySelector("#root"),
	// props: {
	// 	redy: false
	// }
});

// window.initMap = function() {
// 	app.$set({ redy: true });
// }

export default app; 