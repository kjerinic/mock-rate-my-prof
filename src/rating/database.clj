(ns rating.database
  (:require [korma.db :as korma]))

; add database connection information
(def db-connection (korma/mysql {:classname   "com.mysql.cj.jdbc.Driver"
                                 :subprotocol "mysql" :user "root" :password "root"
                                 ; query parameters added to decrease the terminal output on local machine
                                 :subname     "//localhost:3306/testing?autoReconnect=true&useSSL=false"}))

(korma/defdb db db-connection)
