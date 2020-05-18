(ns rating.handler
  (:require [compojure.api.sweet :refer :all]
            [compojure.route :as route]
            [ring.util.http-response :refer :all]
            [schema.core :as schema]
            [rating.queries :as qrs]))

(def app
  (api
    {:swagger
     {:ui   "/"
      :spec "/swagger.json"
      :data {:info {:title       "Rating"
                    :description "Compojure API example"}
             :tags [{:name "api", :description "some apis"}]}}}

    (context "/api" []
      ; for students
      (GET "/teachers" []
        (ok (qrs/get-teachers)))
      (GET "/teachers/:id" []
        :path-params [id :- schema/Int]
        (ok (qrs/get-teacher id)))

      ; for admin
      (POST "/teachers" []
        :body [teacher-data qrs/NewTeacher]
        (let [{:keys [fullName title]} teacher-data]
          (ok (qrs/add-teacher fullName title))))
      (PUT "/teachers" []
        :body [teacher-data qrs/GetTeacher]
        (let [{:keys [id fullName title]} teacher-data]
          (ok {:updated (qrs/update-teacher id fullName title)})))
      (DELETE "/teachers/:id" []
        :path-params [id :- schema/Int]
        (ok {:deleted (qrs/delete-teacher id)}))

      ; non-existing endpoint
      (route/not-found
        (not-found {:body "No such endpoint."}))
      )
    )
  )
