declare namespace NodeJS {
  export interface ProcessEnv {

    DATABASE_URL: string
    DIRECT_URL: string

    AUTH_SECRET: string

    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    USER_ADMIN_URL: string
    MOVIES_ADMIN_URL: string
    SCHEDULES_ADMIN_URL: string
    TICKETS_ADMIN_URL: string
  }
}