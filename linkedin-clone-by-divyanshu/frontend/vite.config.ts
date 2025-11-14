import { defineConfig, loadEnv } from "vite"; // <-- IMPORTED loadEnv HERE
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
    // 1. Load the environment variables from the current mode
    // We use loadEnv with an empty prefix ('') to ensure all ENV vars (including those set by Render) are loaded.
    const env = loadEnv(mode, process.cwd(), '');

    // 2. Return the configuration object
    return {
        plugins: [react()],
        define: {
            // Explicitly inject ALL Firebase keys into the client bundle
            'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
            'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
            'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
            'import.meta.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(env.VITE_FIREBASE_MEASUREMENT_ID),
            
            // If you are using your backend URL in the frontend, define it here too
            // 'import.meta.env.VITE_BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL), 
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});
