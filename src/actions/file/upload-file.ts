"use server";

import "@/config/cloudinary.config";

import { UploadApiResponse, v2 as cloudinary, } from "cloudinary";

/**
 * @used_in actions/movie/create-movie.ts
 */
export async function uploadFile(file: File) {
  const buffer = await file.arrayBuffer();
  const array = new Uint8Array(buffer);

  const response: UploadApiResponse = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result as UploadApiResponse | PromiseLike<UploadApiResponse>);
        }
      })
      .end(array);
  });

  return { url: response.secure_url };
}