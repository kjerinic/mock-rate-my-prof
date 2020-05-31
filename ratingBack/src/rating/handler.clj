(ns rating.handler
  (:require [compojure.api.sweet :refer :all]
            [compojure.route :as route]
            [ring.util.http-response :refer :all]
            [ring.middleware.cors :refer [wrap-cors]]
            [schema.core :as schema]
            [rating.queries :as qrs]))

(def app
  (->
    (api
      {:swagger
       {:ui   "/"
        :spec "/swagger.json"
        :data {:info {:title       "Simplified Rate My Professor"
                      :description "Compojure API example"}
               :tags [{:name "api", :description "some apis"}]}}}

      (context "/api" []
        ; for students and admin
        (GET "/teachers" []
            (ok (qrs/get-teachers)))
        (GET "/teachers/:id" []
          :path-params [id :- schema/Int]
          (ok (qrs/get-teacher id)))
        (POST "/teachers/rating" []
          :body [rating-data qrs/NewTeacherRating]
          (let [{:keys [teacher_id grade comment]} rating-data]
            (ok (qrs/add-teacher-rating teacher_id grade comment))))

        ; for admin only
        (POST "/login" []
          :body [admin qrs/LoginAdmin]
          (let [{:keys [username]} admin]
            (ok (qrs/login-admin username))))
        (POST "/teachers" []
          :header-params [username :- schema/Str]
          :body [teacher-data qrs/NewTeacher]
          (let [{:keys [fullName title]} teacher-data]
            (ok (qrs/add-teacher username fullName title))))
        (PUT "/teachers" []
          :header-params [username :- schema/Str]
          :body [teacher-data qrs/GetTeacher]
          (let [{:keys [id fullName title]} teacher-data]
            (ok {:updated (qrs/update-teacher username id fullName title)})))
        (DELETE "/teachers/:id" []
          :header-params [username :- schema/Str]
          :path-params [id :- schema/Int]
          (ok {:deleted (qrs/delete-teacher username id)}))

        ; non-existing endpoint
        (route/not-found
          (not-found {:body "No such endpoint."})))

      )
    (wrap-cors :access-control-allow-origin #"http://localhost:4200"
               :access-control-allow-methods [:get :put :delete :post])
    ))

