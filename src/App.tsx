import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Container from "@material-ui/core/Container"

import { AppContext, IAppContext, ApiServices } from "./context/AppContext"
import Routes from "./routes"
import { GlobalStyle, defaultTheme } from "./theme"

const App: React.FC = () => {
  const globalAppValue: IAppContext = {
    apiServices: ApiServices,
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContext.Provider value={globalAppValue}>
        {/* Layout */}
        <Router>
          {/* Nav */}
          <div
            id="navbar"
            style={{ borderBottom: "1px solid white", marginBottom: 10 }}
          >
            <Container>
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </Container>
          </div>
          {/* Routes */}
          <Routes />
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App
