import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// This function handles the file upload
export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  return new Promise(async (resolve) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          return resolve(
            NextResponse.json({ error: error.message }, { status: 500 }),
          );
        }
        return resolve(NextResponse.json(result));
      },
    );

    // Convert the file to a buffer and upload
    const buffer = Buffer.from(await file.arrayBuffer());
    uploadStream.end(buffer);
  });
}
