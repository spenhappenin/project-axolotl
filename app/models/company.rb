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
#  user_id     :bigint           not null
#
class Company < ApplicationRecord
  # Associations
  belongs_to :user
  # TODO: We dont really want to delete that data
  has_many :job_applications, dependent: :destroy
  has_many :company_notes, dependent: :destroy

  def fetch_company_data
    return {
      id: self.id,
      title: self.title,
      description: self.description,
      logo_url: self.logo_url,
      industry: self.industry,
      notes: self.company_notes.order('created_at DESC'),
      applications: self.job_applications.order('created_at DESC')
    }
  end

  def self.with_new_company(user, title)
    company = user.companies.new(title: title)
    return company if company.save
  end

end
