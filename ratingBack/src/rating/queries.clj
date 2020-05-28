(ns rating.queries
  (:require [rating.database :refer [db]]
            [korma.core :refer :all]
            [schema.core :as schema]))

; schemas to standardize request and response parameters
(schema/defschema GetTeacher
  {:id       schema/Int
   :fullName schema/Str
   :title    schema/Str})

(schema/defschema NewTeacher
  {:fullName schema/Str
   :title    schema/Str})

(schema/defschema LoginAdmin
  {:username schema/Str})

(schema/defschema NewTeacherRating
  {:teacher_id schema/Int
   :grade      schema/Int
   :comment    schema/Str})

; from korma
; symbol must be equal to the name of the SQL table it uses
(defentity teachers)
(defentity admins)
(defentity teacher_rating_form)

; implement handler functions
(defn login-admin [username]
  (first (select admins
                 (fields :username)
                 (where {:username username}))))

(defn get-teachers []
  (select teachers))

(defn get-teacher [id]
  (first (select teachers
                 (where {:id id}))))

(defn add-teacher [fullName title]
  (insert teachers
          (values {:fullName fullName :title title})))

(defn add-teacher-rating [teacher_id grade comment]
  (insert teacher_rating_form
          (values {:teacher_id teacher_id :grade grade :comment comment})))

(defn delete-teacher [id]
  (delete teachers
          (where {:id id})))

(defn update-teacher [id fullName title]
  (update teachers
          (set-fields {:title    title
                       :fullName fullName})
          (where {:id id})))
