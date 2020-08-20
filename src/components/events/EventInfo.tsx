import React from "react"

import Chip from "@material-ui/core/Chip"
import CancelIcon from "@material-ui/icons/Cancel"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

import { EventModel } from "../../models/event-model"
import { formatDate } from "../../utils/date-utils"
import styled from "styled-components"

const StyledEventInfoWrapper = styled.div`
  .bettable-chip {
    &.bettable {
      background: ${(props) => props.theme.primary};
    }

    &.not-bettable {
      background: ${(props) => props.theme.secondary};
    }
  }
`

interface EventInfoProps {
  event: EventModel
}

const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  return (
    <StyledEventInfoWrapper>
      <h2>{event.name}</h2>
      <div>
        Bettable:{" "}
        <Chip
          label={event.bettable ? "Yes" : "No"}
          className={`bettable-chip ${
            event.bettable ? "bettable" : "not-bettable"
          }`}
          icon={event.bettable ? <CheckCircleIcon /> : <CancelIcon />}
        />
      </div>
      <p>Created: {formatDate(new Date(event.created).toString())}</p>
      <p>Description: {event.description}</p>
      <p>Start Date: {event.start_date}</p>
      <p>Type: {event.type}</p>
    </StyledEventInfoWrapper>
  )
}

export default EventInfo
