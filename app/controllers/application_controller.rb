class ApplicationController < ActionController::Base
 	protect_from_forgery with: :exception
 	before_action :authenticate_user!
 	rescue_from ActionController::RoutingError, with: :not_found
 	layout :layout_by_resource

	def not_found
		respond_to do |format|
      		format.html { redirect_to root_path, notice: "Error, wrong params in the request - record could not be found" }
      		format.json { head :not_found }
      	end
	end

  	protected

  	def layout_by_resource
    	if devise_controller?
      		"devise"
    	else
      		"application"
    	end
  	end
end
