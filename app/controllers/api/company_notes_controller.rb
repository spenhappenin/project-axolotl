class Api::CompanyNotesController < ApiController
  before_action :set_company
  before_action :set_company_note, except: :create

  def create
    note = @company.company_notes.new(note_params)

    if note.save
      render json: note
    else
      render_error(note)
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render_error(@note)
    end
  end

  def destroy
    @note.destroy
  end

  private
    def set_company
      @company = Company.find(params[:company_id])
    end

    def set_company_note
      @note = @company.company_notes.find(params[:id])
    end

    def note_params
      params.require(:company_note).permit(:title, :body)
    end
end
