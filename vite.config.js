import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Sans ce greffon, vite compile le JSX en appels à React.createElement sans importer React : la
// construction réussit mais la page reste blanche au chargement.
export default defineConfig({ plugins: [react()] });
