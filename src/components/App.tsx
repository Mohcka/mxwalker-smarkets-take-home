import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { AppContext, IAppContext, ApiServices } from "../context/AppContext"
import Routes from "../routes"
import { GlobalStyle, defaultTheme } from "../theme"

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
          <Routes />
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App
