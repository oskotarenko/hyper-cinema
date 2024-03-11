declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    DIRECT_URL: string

    AUTH_SECRET: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    CLOUDINARY_NAME: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
  }
}