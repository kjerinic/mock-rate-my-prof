# Using Leiningen as the build tool

## To start the server

First `cd` into project root folder. 

### Install dependencies

`lein deps` 

### Run the application locally

`lein ring server` (opens a browser window)

or

`lein ring server-headless` (starts the server without opening a browser window)

## Try out the API only

Start the server in one of the two previously mentioned ways, go to http://localhost:3000/index.html from your browser and check out the endpoints.