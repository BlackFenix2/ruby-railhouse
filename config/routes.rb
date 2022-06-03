Rails.application.routes.draw do
  # get 'ale_house', to: 'ale_house#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'ale#index'

  resources :ale
end
