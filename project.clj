 (defproject rating "0.1.0"
   :description "A test Clojure project"
   :dependencies [[org.clojure/clojure "1.10.0"]
                  [metosin/compojure-api "2.0.0-alpha30"]
                  [ring/ring "1.6.3"]
                  [compojure "1.6.1"]
                  [manifold "0.1.8"]
                  [metosin/spec-tools "0.9.2"]
                  [korma "0.4.3"]
                  [mysql/mysql-connector-java "8.0.12"]]
   :ring {:handler rating.handler/app}
   :uberjar-name "server.jar"
   :profiles {:dev {:dependencies [[javax.servlet/javax.servlet-api "3.1.0"]
                                  [ring/ring-mock "0.3.2"]]
                   :plugins [[lein-ring "0.12.5"]]}})

