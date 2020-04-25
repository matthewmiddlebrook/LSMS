# LoneStar Meter Solutions Website

This is the repository for the LoneStar Meter Solutions Website created by Wildcat Software.

# Documentation

This documentation is provided for future developers of this project to understand how this website works and how to expand its functionality.

## Code Information

This project utilizes [React](https://reactjs.org/) and is styled with [React-Bootstrap](https://react-bootstrap.github.io/). 

## Getting Started

#### In the project directory, create a `.env` file containing `REACT_APP_MAPBOX_KEY=` followed by an access token from Mapbox, which you can learn more about and get [here](https://docs.mapbox.com/help/glossary/access-token/).

#### Install the necessary dependencies for the project:
```
npm install
```

#### Run the app in the development mode:
```
npm start
```

## Deployment

#### Build the app for production to the `build` folder:
```
npm run build
```

## API Information

To get data for the client application (web and mobile) from the server, access the endpoints page to see what is available. Please note that the data received is always subject to change so if you experience any weird behaviour, first refer to the documentation as it will always have the latest information pertaining to the API. A list of all data models sent or received by the API can be accessed in the models page. Errors pertaining to the API have also been made available in the Errors page.

* [Data Models](https://github.com/matthewmiddlebrook-acu/LSMS/wiki/Models)
* [Endpoints](https://github.com/matthewmiddlebrook-acu/LSMS/wiki/Endpoints)
* [Errors](https://github.com/matthewmiddlebrook-acu/LSMS/wiki/Errors)
