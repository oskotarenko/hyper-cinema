
/** 
 * An array of routes that are accessible to the public
 * These routes do not require authentification
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  "/",
]

/**
 * An array of routes that are used for authentification
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
]

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API auhentification purposes
 *  @type {string}
 */
export const apiAuthPrefix: string = "/api/auth"

/**
 * The default redirect path after loggin in
 * @type {string}
 */
// TODO: make this "/app"
export const DEFAULT_LOGGED_IN_REDIRECT: string = "/"

/**
 * The default redirect to guest after enter protected page
 * @type {string}
 */
export const DEFAULT_AUTH_REDIRECT: string = "/auth/login"