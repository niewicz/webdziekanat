Rails.application.routes.draw do
  get 'contact/index'

  get 'grades/index'

  get 'timetable_changes/index'

  get 'useful_links/index'

  get 'home/index'

  root 'home#index'
  
  devise_for :users, path_names: {
  	sign_up: ''
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
