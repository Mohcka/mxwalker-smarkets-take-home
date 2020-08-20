import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Container from "@material-ui/core/Container"
import GridLoader from "react-spinners/GridLoader"

import styled from "styled-components"

import { AppContext } from "../context/AppContext"
import { EventModel } from "../models/event-model"
import EventInfo from "../components/events/EventInfo"
import { parseEvent } from "../utils/app-helpers"
import { defaultTheme } from "../theme"

const StyledEventPageWrapper = styled.div`
  .event-paper {
    background: ${(props) => props.theme.dark};
    border-radius: 5px;
    padding: 5px;
  }

  .loader-container {
    display: flex;
    justify-content: center;
  }
`

const EventPage: React.FC = () => {
  const { id: eventId } = useParams<{ id: string }>()

  const { apiServices } = useContext(AppContext)
  const [event, setEvent] = useState<EventModel | undefined>(undefined)

  
  useEffect(() => {
    fetchEvent()
    // eslint-disable-next-line
  }, [])

  const fetchEvent = () => {
    apiServices.eventService.getEvents(eventId).then((data) => {
      // parsing event to human-like format
      const event = parseEvent(data.events[0])
      setEvent(event)
    })
  }

  return (
    <StyledEventPageWrapper>
      <Container>
        <div className="event-paper">
          {event ? (
            <EventInfo event={event} />
          ) : (
            <div className="loader-container">
              <GridLoader color={defaultTheme.primary} />
            </div>
          )}
        </div>
      </Container>{" "}
    </StyledEventPageWrapper>
  )
}

export default EventPage
