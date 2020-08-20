/**
 *  a short list of popular events received from the smarkets
 * api route https://api.smarkets.com/v3/popular/event_ids/sport/{sport-name}
 */
export interface PopularEventIds {
  popular_event_ids: string[]
}

export interface EventsResponseModel {
  events: EventModel[]
}

export interface EventModel {
  /** This needs to be True for events to be open for trading */
  bettable: boolean
  /** A string to be used by frontend to show/default selectable chart time periods */
  chart_time_period: string
  /** When was the event created in the Smarkets exchange */
  created: string
  /** Additional description for this event */
  description?: string
  /** On Smarkets listings pages, events will be sorted according to these numbers, in descending order */
  display_order: number
  /** When the event is scheduled to end */
  end_date?: string
  /** The URL slug for the event page */
  full_slug?: string
  /** True if the event is hidden from the Smarkets website */
  hidden: boolean
  /** This ID uniquely identifies an event */
  id: string
  /** True if trading will be open when the markets go live in-play */
  inplay_enabled: boolean
  /** The datetime of the last modification made by Smarkets to the event properties */
  modified?: string
  /** The name of the event */
  name?: string
  /** This ID uniquely identifies the parent of the event */
  parent_id?: string
  /** Additional description for this event used for SEO */
  seo_description?: string
  /** A shorter version of the name of the event */
  short_name?: string
  /** An easier way to identify the event */
  slug?: string
  /** Special rules to be defined for this market */
  special_rules?: string
  /** In what day the event will go live, This can be useful for events that still have an unknown start_datetime */
  start_date?: string
  /** When the event is scheduled to go live */
  start_datetime?: string
  /** Event state can have the following values:
   * - upcoming: the event is now open for betting
   * - live: the event is now live in-play
   * - ended: the event has ended and its markets should be settled
   * - settled: the event has ended and its markets should be settled
   * - cancelled: the event was cancelled and didn't take place
   * - suspended: the event was suspended and during play time
   */
  state?: "upcoming" | "live" | "ended" | "settled" | "cancelled" | "suspended"
  /** The type of the event, for instance, the name of the sport */
  type:
    | "american_football_match"
    | "american_football_outright"
    | "baseball_match"
    | "baseball_outright"
    | "basketball_esports_match"
    | "basketball_match"
    | "boxing_match"
    | "call_of_duty_match"
    | "cricket_match"
    | "cricket_outright"
    | "csgo_match"
    | "current_affairs"
    | "cycling"
    | "darts_match"
    | "darts_outright"
    | "dota_2_match"
    | "football_esports_match"
    | "football_match"
    | "football_outright"
    | "golf_match"
    | "golf_outright"
    | "greyhound_racing_race"
    | "handball_match"
    | "horse_racing_race"
    | "ice_hockey_match"
    | "league_of_legends_match"
    | "mma_match"
    | "motorsports_race"
    | "motorsports_outright"
    | "politics"
    | "politics_outright"
    | "rowing"
    | "rugby_league_match"
    | "rugby_league_outright"
    | "rugby_union_match"
    | "rugby_union_outright"
    | "snooker_match"
    | "snooker_outright"
    | "table_tennis_match"
    | "table_tennis_outright"
    | "tennis_match"
    | "tennis_outright"
    | "volleyball_match"
    | "generic"
    | "top_level_event"
    | "tv_entertainment"
}

// TODO: delete later
export const dummyEvent: EventModel = {
  bettable: false,
  chart_time_period: new Date().toString(),
  created: new Date().toString(),
  display_order: 0,
  hidden: false,
  id: "0",
  inplay_enabled: false,
  name: "An Event",
  state: "upcoming",
  type: "american_football_match",
}
