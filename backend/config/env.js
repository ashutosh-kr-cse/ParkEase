import dotenv from "dotenv";

dotenv.config();

const requireEnv = (name) => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const DATABASE_URL = requireEnv("DATABASE_URL");
export const JWT_SECRET = requireEnv("JWT_SECRET");
