import React from "react"

import Container from "@material-ui/core/Container"

import TopEvents from "../components/events/TopEvents"

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <h1>Top Events</h1>
        <TopEvents title="Football" slug="/sport/football" />
        <TopEvents title="Esports" slug="/sport/esports" />
        <TopEvents title="Tennis" slug="/sport/tennis" />
      </Container>
    </div>
  )
}

export default Home
