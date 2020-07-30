class Api::EventsController < ApiController
  before_action :set_job_application, except: :upcoming_events

  def create
    event = @job_application.events.new(event_params)
    binding.pry
    if event.save
      render json: event
    else
      render_error(event)
    end
  end

  def upcoming_events
    render json: Event.upcoming_events(current_user)
  end

  private
    def set_job_application
      @job_application = JobApplication.find(params[:job_application_id])
    end

    def event_params
      params.require(:event).permit(:event_type, :sub_type, :scheduled_date)
    end
end
