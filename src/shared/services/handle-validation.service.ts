import { ZodError, } from "zod";

import { response, } from "./response.service";

import type { ActionResponse, } from "@/types/action-response";

type HandleValidationError = {
  [key: string]: unknown,
  error: ZodError
}

/**
 * This function accepts a ZodError object, converts the first error to a string value, and returns an object of type ActionResponse
 * @param validated HandleValidationError
 * @returns {ActionResponse}
 */
export function handleValidationError({ error }: HandleValidationError): ActionResponse {
  console.log(Object.keys(error.flatten().fieldErrors))
  const firstKey = Object.keys(error.flatten().fieldErrors)[0];
  return response(null, error.flatten().fieldErrors[firstKey][0]);
}