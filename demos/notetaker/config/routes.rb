Rails.application.routes.draw do
  resources :notes
  get '/', to: 'index#index'
end
