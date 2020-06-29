class Api::CompaniesController < ApiController
  before_action :set_company, only: [:show, :update, :destroy]

  def index
    render json: current_user.companies.order(title: :asc)
  end

  def show
    render json: @company.fetch_company_data
  end

  def create
    company = current_user.companies.new(company_params)

    if company.save
      render json: company
    else
      render_error(company)
    end
  end

  def update
    if @company.update(company_params)
      render json: @company
    else
      render_error(@company)
    end
  end

  def destroy
    @company.destroy
  end

  private
    def set_company
      @company = current_user.companies.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:title, :logo_url, :description, :industry)
    end
end
