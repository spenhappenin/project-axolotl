class Api::JobApplicationsController < ApiController
  before_action :set_company
  before_action :set_job_application, only: [:show, :update]

  def show
    render json: @job_application.render_app_data
  end

  def create
    job_application = @company.job_applications.new(job_application_params)
    if job_application.save
      render json: job_application
    else
      render_error(job_application)
    end
  end

  def update
    if @job_application.update(job_application_params)
      render json: @job_application.render_app_data
    else
      render_error(@job_application)
    end
  end

  private
    def set_company
      @company = params[:company_id] ?
        Company.find(params[:company_id])
      :
        Company.with_new_company(current_user, params[:title])
    end

    def set_job_application
      @job_application = JobApplication.find(params[:id])
    end

    def job_application_params
      params.require(:job_application).permit(:position, :date_submitted, :description, :salary, :status)
    end

end
