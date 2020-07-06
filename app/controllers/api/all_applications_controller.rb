class Api::AllApplicationsController < ApiController

  def index
    render json: JobApplication.all_applications(current_user)
  end

end
