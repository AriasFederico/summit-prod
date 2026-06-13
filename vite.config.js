import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				// Aquí le dices a Vite que "inyecte" el archivo en cada .scss
				// Asegúrate de poner la ruta correcta hacia tu archivo
				additionalData: `@use "/src/_config.scss" as *;`,
			},
		},
	},
});
