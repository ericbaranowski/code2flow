declare module 'navaid' {
  interface Navaid {
    on: (route: string, handler: () => void) => void
  }

  export default (urlBase: string) => Navaid
}
