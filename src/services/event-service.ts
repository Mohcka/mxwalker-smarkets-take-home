import axios from "axios"
import { PopularEventIds, EventsResponseModel } from "../models/event-model"

export class EventService {
  /**
   *
   * @param catagorySlug
   */
  getTopEvents(catagorySlug: string): Promise<PopularEventIds> {
    const topEventsUrl = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids${catagorySlug}`

    return axios.get(topEventsUrl).then((resp) => resp.data)
  }

  getEvents(...ids: string[]): Promise<EventsResponseModel> {
    // parse ids to be appropriate for API
    const parsedIds = ids
      .map((id, i) => {
        // Concat ids to url to retrieve data in one call
        return `id=${id}` + (i === ids.length - 1 ? "" : "&")
      })
      .join("")

    const getEventsUrl = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events?${parsedIds}`

    return axios.get(getEventsUrl).then((resp) => resp.data)
  }
}
