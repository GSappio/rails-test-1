Rails.application.routes.draw do
  resources :vehicles
  resources :tutorials

  resources :comments
  devise_for :users
  resources :user
  resources :tests
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

   root "tests#index"
end
