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

  # Validations
  validates :status, inclusion: { in: %w(pending approved denied), message: 'Not a correct status.' }

  # Associations
  belongs_to :company
  has_many :events

  def self.all_applications(user, status)
    if status == 'all'
      find_by_sql(["
        SELECT a.*, c.title AS company_title
        FROM users u
        INNER JOIN companies c
        ON u.id = c.user_id
        INNER JOIN job_applications a
        ON c.id = a.company_id
        WHERE u.id = ?
        ORDER BY date_submitted DESC;
      ", user])
    else
      find_by_sql(["
        SELECT a.*, c.title AS company_title
        FROM users u
        INNER JOIN companies c
        ON u.id = c.user_id
        INNER JOIN job_applications a
        ON c.id = a.company_id
        WHERE u.id = ? AND status = ?
        ORDER BY date_submitted DESC;
      ", user, status])
    end
  end

  def render_app_data
    return {
      id: self.id,
      position: self.position,
      date_submitted: self.date_submitted,
      description: self.description,
      status: self.status,
      salary: self.salary,
      company: Company.find(self.company_id),
      events: self.events.order('created_at DESC')
    }
  end

end
