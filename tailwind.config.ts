import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Afacad: ["Afacad", "Poppins", "sans serif"],
				Nunito: ["Nunito", "Poppins", "sans serif"],
				Poppins: ["Poppins", "Nunito", "sans serif"],
				"Josefin-Sans": ["Josefin Sans", "Nunito", "Poppins", "sans serif"],
			},
			screens: {
				sm: { min: "150px", max: "600px" },
				md: { min: "600px" },
				...defaultTheme,
			},
			boxShadow: {
				"shadow-inset":
					" 0px 0px 500px 10px #111 inset, -4px 0px 4px 10px #111, 0px -4px 4px 10px #111, 4px 0px 4px 0px #111, 0px 4px 4px 0px #111",
				"right-inset": "0 10px 10px #111 inset",
				"left-inset": "10px 0 10px #111 inset",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				sidebar: "sidebar 200ms linear",
			},
			keyframes: {
				sidebar: {
					from: { display: "block" },
					to: { display: "none" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
