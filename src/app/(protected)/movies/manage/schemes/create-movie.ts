import { z, } from "zod";

export const CreateMovieScheme = z.object({
  title: z.string({ invalid_type_error: "Invalid title" })
    .min(1, { message: "Title required" }),
  trailer: z.string({ invalid_type_error: "Invalid trailer URL" })
    .min(1, { message: "Trailer URL required" })
    .url({ message: "Invalid trailer URL" }),
  genres: z.string({ required_error: "Invalid genres" })
    .min(1, { message: "Genres required" }),
  actors: z.string({ invalid_type_error: "Invalid actors" })
    .min(1, { message: "Actors required" }),
  description: z.string({ invalid_type_error: "invlid description" })
    .min(1, { message: "Description required" }),
  year: z.number({ invalid_type_error: "Invalid publication year" })
    .gte(1888, "Invalid publication year")
    .lte(new Date().getFullYear(), "Invalid publication year"),
  duration: z.number({ required_error: "Duration required" })
    .positive({ message: "Invalid duration" })
    .lte(1440, { message: "Invalid duration" }),
  country: z.string({ invalid_type_error: "Invalid creation country" })
    .min(1, { message: "Creation country required" }),
  studio: z.string({ invalid_type_error: "Invalid production studio" })
    .min(1, { message: "Production studio required" }),
  director: z.string({ invalid_type_error: "Invalid production director" })
    .min(1, { message: "Production director required" }),
  restrictions: z.number({ required_error: "Age restrictions required" })
    .gte(0, { message: "Invalid age restrictions" })
    // ? the choice of the number 123 is based on the age of the person who lived the longest in the history of humankind
    .lte(122, { message: "Invalid age restrictions" }),
});