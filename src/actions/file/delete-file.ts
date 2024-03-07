"use server"

import { v2 as cloudinary, } from "cloudinary";

export async function deleteFile(id: string): Promise<boolean> {
  const response = (await new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(id, (error, result) => {
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