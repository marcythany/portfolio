/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
	],

	darkMode: "class",

	theme: {
		extend: {
			backgroundColor: {
				morp1: "linear-gradient(225deg, #eeffff, #c8d9d8);",
				morp2: "linear-gradient(145deg, #283c46, #21323b);",
			},
			boxShadow: {
				morp1: "-20px 20px 60px #bdcdcc, 20px -20px 60px #ffffff;",
				morp2: "-20px 20px 40px #1b282f, 20px -20px 40px #2f4853;",
			},
		},
		screens: {
			vs: "500px",

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: "#c20ef4",
					secondary: "#79f470",
					accent: "#95ea91",
					neutral: "#23223A",
					"base-100": "#F5F5F5",
					info: "#59AEE3",
					success: "#0D6833",
					warning: "#E88A26",
					error: "#DD2C4A",
				},
				dark: {
					primary: "#a5ffbc",
					secondary: "#bed149",
					accent: "#efa5d4",
					neutral: "#1C1D26",
					"base-100": "#253841",
					info: "#9FD7EF",
					success: "#2EE593",
					warning: "#F2BD6E",
					error: "#F22136",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
