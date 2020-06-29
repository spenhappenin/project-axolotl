# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  logo_url    :text
#  industry    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Company < ApplicationRecord
  # Associations
  belongs_to :user
  has_many :company_notes, dependent: :destroy

  def fetch_company_data
    return {
      id: self.id,
      title: self.title,
      description: self.description,
      logo_url: self.logo_url,
      industry: self.industry,
      notes: self.company_notes.order('created_at DESC')
    }
  end
end
