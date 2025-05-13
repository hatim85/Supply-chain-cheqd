import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 5000;
export const cheqdStudioApiUrl = process.env.CHEQD_STUDIO_API_URL;
export const cheqdApiKey = process.env.CHEQD_API_KEY;
export const mongoUri = process.env.MONGO_URI; // e.g., mongodb://localhost:27017/vc_database