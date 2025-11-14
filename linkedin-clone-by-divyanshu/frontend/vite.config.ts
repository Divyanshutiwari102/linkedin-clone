import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Define the configuration function that receives the current mode
export default defineConfig(({ mode }) => {
    
    // 1. Load environment variables set by Render
    // We use loadEnv with an empty prefix ('') to ensure all ENV vars (including those set by Render) are loaded.
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        
        // The 'define' block statically replaces all 'import.meta.env.*' references 
        // in your code with the actual string values from the environment during the build.
        define: {
            'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
            'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
            'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
            'import.meta.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(env.VITE_FIREBASE_MEASUREMENT_ID),
            
            // CRITICAL: Also define the Backend API URL
            'import.meta.env.VITE_BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL), 
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    };
});
```
---
## 🚀 Next Steps to Finalize Deployment

### 1. Frontend Redeploy

* **Action:** Save the above code to your local `vite.config.ts` file.
* **Action:** Commit and push the change to your frontend GitHub repository.
* **Result:** Render will automatically redeploy your Frontend Static Site, resolving the Firebase error.

### 2. Backend CORS Fix (Crucial)

Once the frontend loads, it will try to contact your backend and fail due to the security policy. You must fix this now.

* **Location:** Your local backend repository (the one deployed to `https://linkedin-clone-mt1e.onrender.com`).
* **File:** Your main server entry file (e.g., `server.ts`).
* **Action:** Add the CORS middleware to allow your frontend's domain:

```typescript
// --- In your backend server file (e.g., server.ts) ---

import express from 'express';
import cors from 'cors'; // Import the cors package

const app = express();

// Set the allowed origin to your FRONTEND URL
const allowedOrigin = 'https://linkedin-frontend-8yzw.onrender.com';

// APPLY CORS middleware
app.use(cors({
    origin: allowedOrigin, // Allow only the frontend domain
    credentials: true, // Needed if you use auth tokens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    optionsSuccessStatus: 200
}));

// ... Commit this fix, push, and redeploy your Backend Web Service.
