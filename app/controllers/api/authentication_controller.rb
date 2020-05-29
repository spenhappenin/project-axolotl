class Api::AuthenticationController < ApiController
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

  def registration
    @current_user = User.new(user_params)
    if @current_user.password_check(params[:password_confirmation]) && @current_user.save
      render json: @current_user
    else
      # TODO: Error handling
    end
  end

  private
    def user_params
      params.permit(:email, :password, :first_name, :last_name)
    end
end
