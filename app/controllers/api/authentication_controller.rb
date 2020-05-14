class Api::AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      @current_user = User.find_by(email: params[:email])
      render json: @current_user
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
