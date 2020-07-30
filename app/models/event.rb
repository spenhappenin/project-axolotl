class Event < ApplicationRecord

  # Associations
  belongs_to :job_application

  def self.upcoming_events(user)
    self.find_by_sql(['
      SELECT c.title, a.POSITION, e.complete, e.event_type, e.scheduled_date
      FROM users u
      INNER JOIN companies c
      ON u.id = c.user_id
      INNER JOIN job_applications a
      ON c.id = a.company_id
      INNER JOIN events e
      ON a.id = e.job_application_id
      WHERE u.id = ? AND e.complete = false;
    ', user])
  end

end
