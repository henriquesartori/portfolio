/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '425px'
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: ['sunset', 'winter'],
	},
}
