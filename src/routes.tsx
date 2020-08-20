import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"
import EventPage from "./pages/EventPage"

export const RoutesConfig = {
  home: "/",
  events: {
    getOne: (id = ":id"): string => `/event/${id}`,
  },
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutesConfig.events.getOne()}>
        <EventPage />
      </Route>

      <Route exact path={RoutesConfig.home}>
        <Home />
      </Route>

      <Route component={NoMatch} />
    </Switch>
  )
}

export default Routes
