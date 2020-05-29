Rails.application.routes.draw do
  namespace :api do
    post 'authenticate', to: 'authentication#authenticate'
    post 'registration', to: 'authentication#registration'
  end
end
