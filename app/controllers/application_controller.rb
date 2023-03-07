class ApplicationController < ActionController::Base
  include Rails.application.routes.url_helpers
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :configure_account_update_params, if: :devise_controller?
    # skip_before_action :verify_authenticity_token, only: [:create], if: -> {request.format.json?}

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys:[:first_name, :last_name, :avatar])
    end
    def configure_account_update_params
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :avatar])
    end
end
