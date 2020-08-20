# mxwalker-smarkets-take-home

This is my submission for the take home assesment on creating a SPA using ReactJS that will
interact with the Smarkets Trading API and present the data retrieved regarding Events to the client

Technologies used in this front-end app are ReactJS, [React-Router](https://reactrouter.com/) to implement the 
SPA functionality, [Material-UI](https://material-ui.com/) for utilizing responsive layout and fonts as well as [Styled-Components](https://styled-components.com/) for dynamic styling and themeing, [Typescript](https://www.typescriptlang.org/) for static typing and [axios](https://github.com/axios/axios) for making calls to the API.

## Usage

To run this app on your machine, simply clone this repo, start up your terminal of choice and run `npm i` then `npm start`

Note: This project uses a proxy to access the API.  The proxy itself has a rate limit of 200 calls per 60 min.  If you expect to do a lot of navigation/refreshing, I suggest commenting out two of the three `TopEvents` components found in `./src/pages/Home.tsx`

## Source Code
A brief rundown of the code found in the `src` directory

## components
Collection of components that will be used in the pages

## components > events
Components that are relevant to displaying the Events info

## services
Contains the `event-service` which is used to communicate to the API and handle
the data retrieved to the client via Promises.

## models
Contains type defintions of the data that is expected to be recieved by the API

## context
This holds the context which utilizes React's [Context API](https://reactjs.org/docs/context.html).  Currently, the context only holds the `event-service` which will be provided globally to the application.  This is allows me to apply dependency injection for my service so that I can use it wherever I need it or swap it out for another service or for a testable.  I could've easily just imported this logic like I would with `utils` but I wanted the chance to play with Context.

## pages
This holds the "pages" for the SPA.  The routing for the pages are configured via the `routes.tsx`.

## theme
Holds the main theme for the app as well as the global styling.  I took this from a boilerplate I use for other projects and just applied the appropriate styling.

## utils
Misc. helpers and utils that contains convenient reusable code

## routes.tsx
The routes component that configures routing for all the pages found in the `pages` directory