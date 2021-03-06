(ns rating.queries
  (:require [rating.database :refer [db]]
            [korma.core :refer :all]
            [schema.core :as schema])
  (:import (java.security MessageDigest)))

; for hashing the password
(defn sha256 [string]
  (let [digest (.digest (MessageDigest/getInstance "SHA-256") (.getBytes string "UTF-8"))]
    (apply str (map (partial format "%02x") digest))))

; schemas to standardize request and response parameters
(schema/defschema GetTeacher
  {:id       schema/Int
   :fullName schema/Str
   :title    schema/Str})

(schema/defschema NewTeacher
  {:fullName schema/Str
   :title    schema/Str})

(schema/defschema LoginAdmin
  {:username schema/Str
   :password schema/Str})

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
(defn login-admin [username password]
  (first (select admins
                 (fields :username)
                 (where {:username username :password (sha256 password)}))))

(defn get-teachers []
  (select teachers))

(defn get-teacher [id]
  (first (select teachers
                 (where {:id id}))))

(defn add-teacher-rating [teacher_id grade comment]
  (insert teacher_rating_form
          (values {:teacher_id teacher_id :grade grade :comment comment})))

; admin only
(defn add-teacher [username fullName title]
  (if (= username "admin")
    (insert teachers
            (values {:fullName fullName :title title}))))

(defn delete-teacher [username id]
  (if (= username "admin")
    (delete teachers
            (where {:id id}))))

(defn update-teacher [username id fullName title]
  (if (= username "admin")
    (update teachers
            (set-fields {:title    title
                         :fullName fullName})
            (where {:id id}))))
