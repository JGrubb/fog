Fog::Application.routes.draw do

  devise_for :users, :path => '', :path_names => {:sign_in => 'login', :sign_out => 'logout'}

  resources :testimonials

  resources :events

  resources :teachers

  resources :announcements
      
  resources :blogs
  
#  resources :pages, except: [:show, :contact, :payment]
#  get ':id', to: 'pages#show', as: :page

  controller :pages do
    get 'pages' => 'pages#index', :as => :pages
    get 'payment' => 'pages#payment', :as => :payment
    get 'contact' => 'pages#contact', :as => :contact_page
    get 'sitemap' => 'pages#sitemap'
    post 'contact' => 'pages#send_contact'
    get ':id' => 'pages#show', :as => :page
    get ':id/edit' => 'pages#edit', :as => :edit_page
    put ':id' => 'pages#update'
    get 'pages/new' => 'pages#new', :as => :new_page
    post 'pages' => 'pages#create'
  end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'pages#home'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
