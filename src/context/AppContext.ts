import React from "react"
import { EventService } from "../services/event-service"

/**
 * A collection of services used to
 * send calls to the API
 */
export const ApiServices = {
  eventService: new EventService(),
}

export interface IAppContext {
  /**
   * A collection of services used to
   * send calls to the API
   */
  apiServices: {
    /** 
     * Service used to retrieve event data
     * from the Smarket API
     */
    eventService: EventService
  }
}

/**
 * The global context used for this application whose purpose
 * is to call on services to interact with the api or handle the
 * global state of the app.
 */
export const AppContext = React.createContext<IAppContext>({
  apiServices: ApiServices,
})
