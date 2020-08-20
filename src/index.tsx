import * as React from "react"
import * as ReactDom from "react-dom"

import App from "./App"


((): void => {
  document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(<App />, document.getElementById("root"))
  })
})()
