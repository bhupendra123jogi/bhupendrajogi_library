/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#63f297",
					"secondary": "#8ac2f7",
					"accent": "#e26a9a",
					"neutral": "#241f2e",
					"base-100": "#3a2b40",
					"info": "#7bc8e0",
					"success": "#228c67",
					"warning": "#fcb659",
					"error": "#ec4432",
				},
			},
		],
	},
};
