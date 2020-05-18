(ns rating.queries
  (:require [rating.database :refer [db]]
            [korma.core :refer :all]
            [schema.core :as s]))

(s/defschema GetTeacher
  {:id       s/Int
   :fullName s/Str
   :title    s/Str})

(s/defschema NewTeacher
  {:fullName s/Str
   :title    s/Str})

(defentity teachers)

(defn get-teachers []
  (select teachers))

(defn get-teacher [id]
  (first (select teachers
                 (where {:id id}))))

(defn add-teacher [fullName title]
  (insert teachers
          (values {:fullName fullName :title title})))

(defn delete-teacher [id]
  (delete teachers
          (where {:id id})))

(defn update-teacher [id fullName title]
  (update teachers
          (set-fields {:title    title
                       :fullName fullName})
          (where {:id id})))
