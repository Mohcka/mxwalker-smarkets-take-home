import Color from "color"
import { createGlobalStyle, DefaultTheme } from "styled-components"

const breakpoints = {
  xs: 450,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1140,
}

export const defaultTheme: DefaultTheme = {
  primary: "#03905F",
  secondary: "#FF3B3F",
  light: "#EFEFEF",
  dark: "#333",
  textLight: "#EEE",
  breakpoints: breakpoints,
  get primaryDark() {
    return Color(this.primary).darken(0.5).hex()
  },
  backgroundColor: "#000000",
  backgroundZIndex: -10,
  closeBackgroundZIndex: -100,
  midBackgroundZIndex: -500,
  farBackgroundZIndex: -999,
  htmlBackgroundZIndex: -9999,
}

export { breakpoints }

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.backgroundColor};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  * {
    color: ${(props) => props.theme.textLight};
    font-family: Sans-serif, Monospace;
  }

  h1, h2, h3, h4, h5 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1, h2, h3, h4, h5, a {
    color: ${(props) => props.theme.primary};
  }

  a {
    text-decoration: none;
    transition: color 0.3s;
      &:hover {
        color: ${(props) => Color(props.theme.primary).lighten(0.6).hex()};
      }
  }
`
