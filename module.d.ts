declare namespace NodeJS {
  export interface ProcessEnv {

    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    POSTGRES_URL: string
    POSTGRES_PRISMA_URL: string
    POSTGRES_URL_NO_SSL: string
    POSTGRES_URL_NON_POOLING: string
    POSTGRES_USER: string
    POSTGRES_HOST: string
    POSTGRES_PASSWORD: string
    POSTGRES_DATABASE: string
  }
}