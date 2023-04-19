Rails.application.routes.draw do
  get 'rooms/:id', to: 'rooms#show'
  get 'dashboard/index'
  root "dashboard#index"
end
