import * as React from "react"
import * as ReactDom from "react-dom"

import App from "./App"

export default class Index {
  public static loadComponent(): void {
    document.addEventListener("DOMContentLoaded", () => {
      ReactDom.render(
        <App />,
        document.getElementById("app")
      )
    })
  }
}
