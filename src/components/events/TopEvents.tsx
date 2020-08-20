import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"
import GridLoader from "react-spinners/GridLoader"

import { AppContext } from "../../context/AppContext"
import { EventModel } from "../../models/event-model"
import { RoutesConfig } from "../../routes"
import { parseEvent } from "../../utils/app-helpers"
import { defaultTheme } from "../../theme"

const StyledTopEventsWrapper = styled.div`
  .top-events-paper {
    background: ${(props) => props.theme.dark};
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }

  .loader-container {
    display: flex;
    justify-content: center;
  }
`

interface TopEventsProps {
  title: string
  slug: string
}

const TopEvents: React.FC<TopEventsProps> = ({ title, slug }) => {
  const { apiServices } = useContext(AppContext)
  const [events, setEvents] = useState<EventModel[]>([])

  useEffect(() => {
    fetchTopEvents()
    // eslint-disable-next-line
  }, [])

  const fetchTopEvents = () => {
    apiServices.eventService.getTopEvents(slug).then((data) => {
      console.log(...data.popular_event_ids)

      apiServices.eventService
        .getEvents(...data.popular_event_ids)
        .then((data) => {
          // Parse events to human-like format
          const tempEvents = data.events.map((event) => parseEvent(event))
          setEvents(tempEvents)
        })
    })
  }

  return (
    <StyledTopEventsWrapper>
      <h2>{title}</h2>
      {events.length ? (
        events.map((event, key) => (
          <div key={key} id={`event-${event.id}`} className="top-events-paper">
            <Link to={`${RoutesConfig.events.getOne(event.id)}`}>
              <h3>{event.name}</h3>
            </Link>
            <p>Start Date: {event.start_date}</p>
            <Link to={`${RoutesConfig.events.getOne(event.id)}`}>
              Learn more...
            </Link>
          </div>
        ))
      ) : (
        <div className="loader-container top-events-paper">
          <GridLoader color={defaultTheme.primary} />
        </div>
      )}
    </StyledTopEventsWrapper>
  )
}

export default TopEvents
