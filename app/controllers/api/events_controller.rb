class Api::EventsController < ApplicationController
  before_action :set_job_application

  private
    def set_job_application
      @job_application = JobApplication.find(params[:job_application_id])
    end
end
