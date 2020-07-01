class Api::JobApplicationsController < ApiController
  before_action :set_job_application, only: :show

  def show
    render json: @job_application.render_app_data
  end

  private
    def set_job_application
      @job_application = JobApplication.find(params[:id])
    end

end
