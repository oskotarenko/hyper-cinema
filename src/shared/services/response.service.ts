import type { ActionResponse } from "@/types/action-response";
import toast from "react-hot-toast";

/**
 * This function creates valid server action response object.
 * Takes two arguments of type string or null, and one and only one must be a string, otherwise, function will throw an Illegal Aregument Exception.
 * @returns Valid server action response object {success: string, error: string}
 */
export function response(success: string | null, error: string | null): ActionResponse {
  if ((success === null && error === null) || (success !== null && error !== null))
    throw new Error("Invalid response exception");

  return { success, error };
}

/**
 * This function exposes messages from the server action.
 * Use only in client components!
 */
export function extractResponse(res: ActionResponse): string {
  if (res.success !== null)
    return toast.success(res.success);

  if (res.error !== null)
    return toast.error(res.error);
}