import { EventModel } from "../models/event-model"

/**
 * Parses event to have human readable text.  Currently
 * replaces all null properties with "Unavailabe"
 * @param event Event to be parsed
 */
export const parseEvent = (event: EventModel): EventModel => {
  const eventTemp: EventModel = event
  for (const [key, value] of Object.entries(event)) {
    // console.log(value)
    if (value === null || value.length === 0) {
      (eventTemp[key as keyof EventModel] as string) = "Unavailabe"
    }
  }

  return eventTemp
}
