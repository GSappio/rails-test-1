Rails.application.routes.draw do
  devise_for :users
  resources :user
  resource :user, only: [:show, :update]
  resources :tests
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

   root "tests#index"
   get '/users', to: 'users#index', defaults: {format: :json}
   
end
