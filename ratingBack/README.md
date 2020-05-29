# Clojure REST API using Leiningen

The project uses Ring, Compojure and Swagger to make a "sweet API" and SQL Korma for communicating with the database.

## Requirements

To start the project you need to have Java installed (at least version 8) as well as Leiningen, a popular Clojure build tool.

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

## References
This project was made using information from multiple tutorials and documentations, including:

1. http://practicalli.github.io/clojure-webapps/
2. https://practicalli.github.io/blog/posts/clojure-web-server-cli-tools-deps-edn/
3. https://devcenter.heroku.com/articles/clojure-web-application
4. http://metosin.github.io/compojure-api/doc/

