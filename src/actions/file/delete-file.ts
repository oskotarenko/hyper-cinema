"use server"

import { v2 as cloudinary, } from "cloudinary";

/**
 * @used_in not used yet
 */
export async function deleteFile(fileId: string): Promise<boolean> {
  const response = (await new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(fileId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  })) as { result: string };

  if (response.result !== 'ok') return false;
  else return true;
}