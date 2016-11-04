class ApplicationController < ActionController::Base
 	protect_from_forgery with: :exception
 	before_action :authenticate_user!
 	rescue_from ActionController::RoutingError, with: :not_found

	def not_found
  		redirect_to root_path
	end
end
