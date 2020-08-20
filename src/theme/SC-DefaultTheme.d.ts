import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    /** The primary color */
    primary: string
    /** Darkened version of the primary color */
    primaryDark: string
    /** The Secondary color */
    secondary: string
    /** Light contrast color */
    light: string
    /** Dark contrast color */
    dark: string
    /** Light color for text */
    textLight: string
    /** Main background color for the page */
    backgroundColor: string
    /** The default background z-index */
    backgroundZIndex: number
    /** The frontmost background depth */
    closeBackgroundZIndex: number
    /** The mid range background depth */
    midBackgroundZIndex: number
    /** the farthest background depth */
    farBackgroundZIndex: number
    /** The depth of the html page element itself */
    htmlBackgroundZIndex: number
    /** Declared screen breakpoints */
    breakpoints: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
}
