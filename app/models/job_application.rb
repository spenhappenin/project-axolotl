# == Schema Information
#
# Table name: job_applications
#
#  id             :bigint           not null, primary key
#  date_submitted :datetime
#  position       :string
#  salary         :integer
#  active         :boolean          default(TRUE)
#  company_id     :bigint           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class JobApplication < ApplicationRecord
  # Associations
  belongs_to :company

  def render_app_data
    return {
      id: self.id,
      position: self.position,
      date_submitted: self.date_submitted,
      description: self.description,
      status: self.status,
      company: Company.find(self.company_id)
    }
  end

end
