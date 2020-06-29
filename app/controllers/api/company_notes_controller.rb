class Api::CompanyNotesController < ApiController
  before_action :set_company

  def create
    note = @company.company_notes.new(note_params)

    if note.save
      render json: note
    else
      render_error(note)
    end
  end

  private
    def set_company
      @company = Company.find(params[:company_id])
    end

    def note_params
      params.require(:company_note).permit(:title, :body)
    end
end
