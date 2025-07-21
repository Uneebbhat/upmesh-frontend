const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING as string;
const JWT_SECRET = process.env.JWT_SECRET as string;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME as string;
const CLOUD_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string;
const CLOUD_API_SECRET = process.env.CLOUDINARY_API_SECRET as string;

export {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SECRET,
};
